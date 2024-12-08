import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="">
      404 NotFound
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
