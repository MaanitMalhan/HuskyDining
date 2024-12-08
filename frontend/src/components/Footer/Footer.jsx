import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Menu",
    link: "/menu",
  },
  {
    title: "Donate",
    link: "/donate",
  },
  {
    title: "Reviews",
    link: "/reviews",
  },
  {
    title: "FlexPass",
    link: "/flexpass",
  },
  {
    title: "Points",
    link: "/points",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950 bg-gray-950 mt-8">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-40 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-blue font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              HuskyDining
            </a>
            <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
              Better Connecting Students to Uconn Dining Services
            </p>
            <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
              Easily access dining hall menus and restaurant options around
              campus. Our goal is to provide you with quick access to the dining
              services, so you can make informed decisions about your meals.
            </p>
            <a
              href="/"
              target="_blank"
              className="inline-block bg-blue/90 text-white py-2 px-4 mt-4 text-sm rounded-md"
            >
              Home
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 text-blue">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
