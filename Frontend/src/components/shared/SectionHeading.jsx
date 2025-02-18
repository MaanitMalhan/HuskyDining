import React from "react";

export const SectionHeading = ({ children }) => {
  return (
    <h2 className="mx-auto mb-4 max-w-2xl text-center text-4xl font-bold leading-[1.15] md:text-6xl md:leading-[1.15]">
      {children}
    </h2>
  );
};
