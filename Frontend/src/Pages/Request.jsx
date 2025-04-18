import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import {
  useGetRequestsQuery,
  useGetRequestPointsQuery,
  useCreateRequestMutation,
} from "../slices/requestApiSlice";
import { Card } from "../components/Cards/Request";
import { Card_Points } from "../components/Cards/Request_points";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { toast } from "react-toastify";

export const Request = () => {
  const [page, setPage] = useState(1);
  const { data: requests, isFetching } = useGetRequestsQuery(page);
  const { data: pointRequests } = useGetRequestPointsQuery(page);
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="">
      <Navbar />
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold px-6 py-4 rounded-xl hover:opacity-90 transition-all text-lg z-30 shadow-lg"
      >
        Click to Request
      </button>
      {userInfo && (
        <SpringModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          userID={userInfo._id}
        />
      )}
      <div className="my-20"></div>

      <div className="p-8 space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            Flex Requests
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {requests?.map((req) => (
              <Card
                key={req._id}
                title={req.priority || "Flex"}
                subtitle={`Could you donate ${req.amount} Flex Pass${
                  req.amount > 1 ? "es" : ""
                }?`}
                requestId={req._id}
                fromUserId={userInfo?._id}
                toUserId={req.userID}
                flexPassCount={req.amount}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            Points Requests
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pointRequests?.map((req) => (
              <Card_Points
                key={req._id}
                title={req.priority || "Points"}
                subtitle={`Could you donate ${req.amount} Point${
                  req.amount > 1 ? "s" : ""
                }?`}
                requestId={req._id}
                fromUserId={userInfo?._id}
                toUserId={req.userID}
                pointsCount={req.amount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen, userID }) => {
  const [amount, setAmount] = useState("");
  const [diningHallID, setDiningHall] = useState("");
  const [type, setType] = useState("flex");
  const [create, { isLoading }] = useCreateRequestMutation();

  const diningHalls = [
    { id: "67c739b5dbbbc523ecba74ee", name: "Putnam" },
    { id: "67c739b5dbbbc523ecba74ed", name: "Northwest" },
    { id: "67c739b5dbbbc523ecba74ec", name: "North" },
    { id: "67c739b5dbbbc523ecba74f0", name: "Whitney" },
    { id: "67c739b5dbbbc523ecba74ea", name: "Towers" },
    { id: "67c739b5dbbbc523ecba74eb", name: "McMahon" },
    { id: "67c739b5dbbbc523ecba74e9", name: "Connecticut" },
    { id: "67c739b5dbbbc523ecba74ef", name: "South" },
  ];

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!amount || !diningHallID) {
      alert("Please fill out all fields");
      return;
    }

    try {
      const res = await create({ userID, diningHallID, amount, type }).unwrap();
      toast.success("Request submitted successfully!");

      setIsOpen(false);
    } catch (err) {
      toast.error("An error occurred. Please try again later.");
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <div className="flex justify-center gap-4 mb-4">
                <button
                  type="button"
                  onClick={() => setType("flex")}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    type === "flex"
                      ? "bg-white text-indigo-600"
                      : "bg-white/10 text-white border border-white"
                  }`}
                >
                  Request Flex
                </button>
                <button
                  type="button"
                  onClick={() => setType("points")}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    type === "points"
                      ? "bg-white text-indigo-600"
                      : "bg-white/10 text-white border border-white"
                  }`}
                >
                  Request Points
                </button>
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Dining Hall {type === "flex" ? "Flex Pass" : "Points"} Request
              </h3>
              <form onSubmit={submitHandler} className="space-y-4 mb-6">
                <input
                  type="number"
                  step="1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount"
                  className="w-full p-2 rounded text-black"
                  required
                />
                <select
                  value={diningHallID}
                  onChange={(e) => setDiningHall(e.target.value)}
                  className="w-full p-2 rounded text-black"
                  required
                >
                  <option value="">Select Dining Hall</option>
                  {diningHalls.map((hall) => (
                    <option key={hall.id} value={hall.id}>
                      {hall.name}
                    </option>
                  ))}
                </select>
              </form>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  disabled={isLoading}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>
                <button
                  onClick={submitHandler}
                  disabled={isLoading}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Create Request!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
