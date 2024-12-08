import React from "react";
import placeholder from "../../assets/category/solid-color-image.png";
import Button from "../Shared/Button";
import { Link } from "react-router-dom";

const PT_Menu_Cat = () => {
  return (
    <div className="py-8 bg-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white"></p>
                <p className="text-2xl font-semibold mb-[2px]"></p>
                <p className="text-4xl xl:text-5xl font-bold mb-2 text-white">
                  Putnam
                </p>
                <Link to="/donate">
                  <Button
                    text="~placeholder~"
                    bgColor={"bg-blue"}
                    textColor={"text-white"}
                  />
                </Link>
              </div>
            </div>
            <img
              src={placeholder}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* Second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-green/90 to-green/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white"></p>
                <p className="text-2xl font-semibold mb-[2px]">~placeholder~</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  ~placeholder~
                </p>
              </div>
            </div>
          </div>
          {/* Third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-blue to-blue/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white"></p>
                <p className="text-2xl font-semibold mb-[2px]">~placeholder~</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  ~placeholder~
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PT_Menu_Cat;
