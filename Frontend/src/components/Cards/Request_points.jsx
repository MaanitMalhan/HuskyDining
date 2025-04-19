import React from "react";
import { twMerge } from "tailwind-merge";
import { MotionConfig, motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useFulfillRequestPointsMutation } from "../../slices/requestApiSlice";
import { toast } from "react-toastify";

export const Card_Points = ({
  title,
  subtitle,
  className,
  requestId,
  fromUserId,
  toUserId,
  pointsCount,
}) => {
  const [fufill, { isLoading }] = useFulfillRequestPointsMutation();

  const onClick = async (e) => {
    try {
      const res = await fufill({
        requestId,
        fromUserId,
        toUserId,
        pointsCount,
      }).unwrap();
      toast.success("Fufilled");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <MotionConfig
      transition={{
        type: "spring",
        bounce: 0.5,
      }}
    >
      <motion.div
        whileHover="hovered"
        className={twMerge(
          "group w-full border-2 border-black bg-emerald-300",
          className
        )}
      >
        <motion.div
          initial={{ x: 0, y: 0 }}
          variants={{
            hovered: { x: -5, y: -5 },
          }}
          className={twMerge(
            "-m-0.5 border-2 border-black bg-emerald-300",
            className
          )}
        >
          <motion.div
            initial={{ x: 0, y: 0 }}
            variants={{
              hovered: { x: -5, y: -5 },
            }}
            className={twMerge(
              "relative -m-0.5 flex h-52 flex-col justify-between overflow-hidden border-2 border-black bg-emerald-300 p-8",
              className
            )}
          >
            <p className="flex items-center text-2xl font-medium uppercase">
              <FiArrowRight className="-ml-8 mr-2 opacity-0 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:opacity-100" />
              {title} Priority
            </p>
            <div>
              <p className="transition-[margin] duration-300 ease-in-out group-hover:mb-10 text-2xl font-medium">
                {subtitle}
              </p>
              <button
                onClick={onClick}
                className="absolute bottom-2 left-2 right-2 translate-y-full border-2 border-black bg-white px-4 py-2 text-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
              >
                DONATE
              </button>
            </div>

            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              style={{
                top: "0",
                right: "0",
                x: "50%",
                y: "-50%",
                scale: 0.75,
              }}
              width="200"
              height="200"
              className="pointer-events-none absolute z-10 rounded-full"
            >
              <path
                id="circlePath"
                d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
                fill="none"
              />
              <text>
                <textPath
                  href="#circlePath"
                  fill="black"
                  className="fill-black text-2xl font-black uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                >
                  HELP A FRIEND OUT • HELP A FRIEND OUT • HELP A FRIEND OUT •
                  HELP A FRIEND OUT •
                </textPath>
              </text>
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};
