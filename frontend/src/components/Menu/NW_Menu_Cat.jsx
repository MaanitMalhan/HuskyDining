import React from "react";
import placeholder from "../../assets/category/solid-color-image.png";
import Button from "../Shared/Button";
import { Link } from "react-router-dom";

const NW_Menu_Cat = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Help</p>
                <p className="text-2xl font-semibold mb-[2px]">
                  a student with
                </p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Flex Pass
                </p>
                <Link to="/flexpass">
                  <Button
                    text="Flex Pass"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-yellow to-yellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Help</p>
                <p className="text-2xl font-semibold mb-[2px]">
                  a student with
                </p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Points
                </p>
                <Link to="/points">
                  <Button
                    text="Points"
                    bgColor={"bg-white"}
                    textColor={"text-yellow"}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* third col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <img
              src={placeholder}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white"></p>
                <p className="text-2xl font-semibold mb-[2px]">Check</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Reviews
                </p>
                <Link to="/reviews">
                  <Button
                    text="Reviews"
                    bgColor={"bg-white"}
                    textColor={"text-primary"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NW_Menu_Cat;
