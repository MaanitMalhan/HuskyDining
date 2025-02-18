import React from "react";
import { Navbar } from "../components/Navbar/Navbar";

export const Menu = () => {
  return (
    <div className="">
      <Navbar />
      <div className="rounded-lg h-[calc(100vh-64px)] overflow-y-auto w-[100%] bg-primary p-3 text-white mt-[51px]">
        Menu
      </div>
    </div>
  );
};
