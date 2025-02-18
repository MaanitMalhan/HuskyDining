import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";

export const Announcement = () => {
  const [dismissed, setDismissed] = useState(false);
  return (
    <div className="overflow-hidden">
      <AnimatePresence>
        {dismissed || (
          <motion.div
            className="relative"
            exit={{
              height: "-0px",
            }}
          >
            <Link
              href="/"
              target="_blank"
              className="mx-auto mb-3 flex w-fit flex-col items-center justify-center gap-1 text-sm text-white hover:underline sm:flex-row"
            >
              <span className="font-semibold">🎉 Announcement 🎉</span>
              <span className="hidden sm:block">–</span>
              <span> Welcome to Husky Dining</span>
            </Link>
            <button
              onClick={() => setDismissed(true)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            >
              <FiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
