import React from "react";

export const SectionSubheading = ({ children }) => {
  return (
    <p className="mx-auto mb-8 text-center text-base leading-relaxed md:mb-12 md:text-xl md:leading-relaxed">
      {children}
    </p>
  );
};
