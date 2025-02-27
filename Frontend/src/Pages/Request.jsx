import React, { useState, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Navbar } from "../components/navigation/Nav";
import request from "../../../Backend/Data/dummyRequest";
import { useSelector } from "react-redux";
import { useGetRequestsQuery } from "../slices/requestApiSlice";
import { useCreateRequestMutation } from "../slices/requestApiSlice";

export const Request = () => {
  const [page, setPage] = useState(1);
  const { data: requests = [], isFetching } = useGetRequestsQuery(page);
  const [userID, setUserID] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Point");
  const [diningHallID, setDiningHallID] = useState("");

  const [createRequest, { isLoading, isError, error }] = useCreateRequestMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createRequest({userID, diningHallID, amount, type}).unwrap();
      console.log("Request created successfully:", response);

      setRequestData(""); 
      setNetid("");
      setAmount("");
      setType("");
    } catch (err) {
      console.error("Failed to create request:", err);
    }
  };

  return (
    <div
      className="h-[100vh] flex items-center justify-center"
      style={{
        background: "linear-gradient(45deg, rgb(95, 20, 224), rgb(155, 105, 241))",
      }}
    >
      <div className="relative w-[600px] h-[600px] bg-white rounded-[48px] shadow-xl">
        <div className="absolute w-[calc(100%-4.1rem)] h-[calc(100%-4.1rem)] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="absolute h-[100%] w-[100%] top-0 left-0 flex flex-col justify-center px-10">
            <h2 className="text-3xl font-semibold mb-6">Create a Request</h2>
            <form 
              onSubmit={handleSubmit} 
              autoComplete="off" 
              className="flex flex-col space-y-6"
            >
              <div className="relative">
                <input
                  type="text"
                  className="w-full border-b border-gray-400 outline-none focus:border-black transition-all"
                  value={userID}
                  onChange={(e) => setUserID(e.target.value)}
                  placeholder="Enter NetId"
                />
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  className="w-full border-b border-gray-400 outline-none focus:border-black transition-all"
                  value={diningHallID}
                  onChange={(e) => setDiningHallID(e.target.value)}
                  placeholder="Enter Dining Hall ID"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-lg ${type === "Point" ? "bg-primary text-white" : "bg-gray-300"}`}
                  onClick={() => setType("Point")}
                >
                  Points
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-lg ${type === "Flex" ? "bg-primary text-white" : "bg-gray-300"}`}
                  onClick={() => setType("Flex")}
                >
                  Flex Passes
                </button>
              </div>

              <div className="relative">
                <input
                  type="number"
                  className="w-full border-b border-gray-400 outline-none focus:border-black transition-all"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter Amount"
                />
              </div>

              <button
                type="submit"
                className="w-full h-[43px] bg-primary text-white rounded-lg cursor-pointer text-[.8rem]"
                disabled={isLoading}
              >
                {isLoading ? "Creating..." : "Create Request"}
              </button>

              {isError && (
                <p className="text-red-500 text-center mt-3">Error: {error?.data?.message || "Failed to create request"}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};