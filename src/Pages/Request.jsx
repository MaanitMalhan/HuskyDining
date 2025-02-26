import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navigation/Nav";
import request from "../../../backend/Data/dummyRequest";
import { useSelector } from "react-redux";
import { useGetRequestsQuery } from "../slices/requestApiSlice";

export const Request = () => {
  const [page, setPage] = useState(1);
  const { data: requests = [], isFetching } = useGetRequestsQuery(page);

  return (
    <div className="">
      <Navbar />
    </div>
  );
};
