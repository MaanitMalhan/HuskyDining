import React from "react";
import Button from "../Shared/Button2";
import { Link } from "react-router-dom";

const LoginNavbar = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-white font-semibold tracking-widest text-2xl uppercase sm:text-3xl "
            >
              HuskyDining
            </a>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4 ">
            {/* Login section */}
            <div>
              <Link to="/signup">
                <Button
                  text="SignUp"
                  bgColor={"bg-blue"}
                  textColor={"text-white"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNavbar;