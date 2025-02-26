import React from "react";
import { OPTIONS } from "./options";
import { AnimatePresence } from "framer-motion";

export const Users = ({ selected }) => {
  const { Content } = OPTIONS[selected];

  return (
    <div className="w-full translate-y-2 rounded-lg bg-zinc-900">
      <AnimatePresence mode="wait">
        <Content key={selected} />
      </AnimatePresence>
    </div>
  );
};
