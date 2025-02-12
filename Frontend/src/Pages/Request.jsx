import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navigation/Nav";
import request from "../../../Backend/Data/dummyRequest";
import { useSelector } from "react-redux";
import { useGetRequestsQuery } from "../slices/requestApiSlice";
import { useCreateRequestMutation } from "../slices/requestApiSlice";

export const Request = () => {
  const [page, setPage] = useState(1);
  const { data: requests = [], isFetching } = useGetRequestsQuery(page);
  const [netid, setNetid] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Point");

  const [requestData, setRequestData] = useState("");
  const [createRequest, { isLoading, isError, error }] = useCreateRequestMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createRequest({ netid, amount, type}).unwrap();
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
    <div className="">
      <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="w-[500px] mx-auto h-full flex flex-col justify-evenly"
            >
      <h1 className="text-3xl font-semibold">Request</h1>
      <h2>Enter NetId</h2>
      <input
        key={1}
        type="netid"
        value={netid}
        onChange={(e) => setNetid(e.target.value)}
        />
      <h2>Current Type: {type}</h2>
      <button onClick={() => setType("Point")}>Change Type to Points</button>
      <button onClick={() => setType("Flex")}>Change Type to Flex Passes</button>
      <h2>Enter Amount</h2>
      <input
        key={1}
        type="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      
      <button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
      <Navbar />
    </div>
    
  );
};
