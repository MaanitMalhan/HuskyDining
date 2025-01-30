import React from "react";
import { Link } from "react-router-dom";

export const NavLink = ({ link, title }) => {
  return (
    <Link
      to={link}
      className="inline-block border-2 px-2 py-1 text-xs font-semibold uppercase cursor-pointer border-neutral-950 bg-neutral-200 text-neutral-950"
    >
      {title}
    </Link>
  );
};
