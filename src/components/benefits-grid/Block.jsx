import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          y: 6,
          boxShadow: "0px 0px 0px rgb(24, 24, 27)",
        },
        whileInView: {
          y: 0,
          boxShadow: "0px 6px 0px rgb(24, 24, 27)",
        },
      }}
      className={twMerge(
        "col-span-1 rounded-lg border-2 border-zinc-900 bg-white p-6",
        className
      )}
      {...rest}
    />
  );
};
