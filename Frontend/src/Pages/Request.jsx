import React, { useState, useEffect } from "react";
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
    <div className="p-4">
      <form onSubmit={handleSubmit} autoComplete="off" className="w-[500px] mx-auto flex flex-col space-y-4">
        <h1>Request</h1>

        <label htmlFor="userID">Enter NetId</label>
        <input
          id="userID"
          type="text"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}

        />

        <label htmlFor="diningHallID">Enter Dining Hall ID</label>
        <input
          id="diningHallID"
          type="text"
          value={diningHallID}
          onChange={(e) => setDiningHallID(e.target.value)}
        />

        <h2>Current Type: {type}</h2>
        <div className="flex space-x-2">
          <button type="button"  onClick={() => setType("Point")}>
            Set to Points
          </button>
          <button type="button" onClick={() => setType("Flex")}>
            Set to Flex Passes
          </button>
        </div>

        <label htmlFor="amount">Enter Amount</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button disabled={isLoading} type="submit">
          {isLoading ? "Creating..." : "Create Request"}
        </button>

        {isError && <p className="text-red-500">Error: {error?.data?.message || "Failed to create request"}</p>}
      </form>

      <h1>Available requests</h1>

      <Navbar />
    </div>
  );
};
