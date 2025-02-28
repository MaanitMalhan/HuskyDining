import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navigation/Nav";
import request from "../../../backend/Data/dummyRequest";
import { useSelector } from "react-redux";
import { useGetRequestsQuery } from "../slices/requestApiSlice";
import { Card } from "../components/Cards/Request";

export const Request = () => {
  const [page, setPage] = useState(1);
  const { data: requests, isFetching } = useGetRequestsQuery(page);

  return (
    <div className="">
      <Navbar />
      <div className="my-20"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
        {requests?.map((req) => (
          <Card
            key={req._id}
            className=""
            title={req.priority}
            subtitle={req.amount}
          ></Card>
        ))}
      </div>
    </div>
  );
};
