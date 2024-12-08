import { data } from "autoprefixer";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import Button from "../Shared/Button2";

const MenuLinks = [
  {
    id: 1,
    name: "Menu",
    link: "/menu",
  },
  {
    id: 2,
    name: "Donate",
    link: "/donate",
  },
  {
    id: 3,
    name: "Reviews",
    link: "/reviews",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Flex Pass",
    link: "/flexpass",
  },
  {
    id: 2,
    name: "Points",
    link: "/points",
  },
];

const DONavbar = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-black font-semibold tracking-widest text-2xl uppercase sm:text-3xl "
            >
              HuskyDining
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4 ">
                {MenuLinks.map((data, index) => (
                  <li key={{ index }}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 text-black dark:hover:text-white doration-200"
                    >
                      {" "}
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* DropDown */}
                <li className="relative cursor-pointer group">
                  <a
                    href="/"
                    className="flex items-center gap-[2px] font-semibold text-black dark:hover:text-white py-2"
                  >
                    Requests
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li>
                          <a
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-blue/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4 ">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="
              search-bar
              "
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            {/* Dark Mode section */}
            <div>
              <DarkMode />
            </div>
            {/* Login section */}
            <div>
              <Link to="/login">
                <Button
                  text="Login"
                  bgColor={"bg-primary"}
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

export default DONavbar;
