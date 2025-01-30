import React from "react";

export const NavButton = ({ logo, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block border-2 px-2 py-1 text-xs font-semibold uppercase cursor-pointer border-neutral-950 bg-neutral-200 text-neutral-950 transition-colors hover:bg-neutral-300`}
    >
      {logo}
    </button>
  );
};
