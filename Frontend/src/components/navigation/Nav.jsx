import { SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/authApiSlice";
import { logout } from "../../slices/authSlice";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return <Nav />;
};

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
    </>
  );
};

const LinksOverlay = () => {
  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden">
      <Logo />
      <LinksContainer />
      <FooterCTAs />
    </nav>
  );
};

const LinksContainer = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const LINKS = [
    {
      title: "home",
      href: "/",
    },
    {
      title: "request",
      href: "/request",
    },
    {
      title: "donate",
      href: "/donate",
    },
    {
      title: "dashboard",
      href: `/dashboard/${userInfo?._id}`,
    },
    {
      title: "about",
      href: "/about",
    },
    {
      title: "menu",
      href: "/menu",
    },
  ];

  return (
    <motion.div className="space-y-4 p-12 pl-4 md:pl-20">
      {LINKS.map((l, idx) => {
        return (
          <NavLink key={l.title} href={l.href} idx={idx}>
            {l.title}
          </NavLink>
        );
      })}
    </motion.div>
  );
};

const NavLink = ({ children, href, idx }) => {
  return (
    <Link to={href}>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.75 + idx * 0.125,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        exit={{ opacity: 0, y: -8 }}
        className="block text-5xl font-semibold text-indigo-400 transition-colors hover:text-indigo-50 md:text-7xl"
      >
        {children}.
      </motion.div>
    </Link>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.a
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      exit={{ opacity: 0, y: -12 }}
      href="#"
      className="grid h-20 w-20 place-content-center rounded-br-xl rounded-tl-xl bg-white transition-colors hover:bg-indigo-50"
    >
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-indigo-600"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#FFFFFF"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#FFFFFF"
        ></path>
      </svg>
    </motion.a>
  );
};

const HamburgerButton = ({ active, setActive }) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 16, right: 16 }}
        className="fixed z-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-800/20"
      />

      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className={`group fixed right-4 top-4 z-50 h-20 w-20 bg-white/0 transition-all hover:bg-white/20 ${
          active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
        }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className="absolute block h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute block h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute block h-1 w-5 bg-white"
          style={{ x: "-50%", y: "50%" }}
        />
      </motion.button>
    </>
  );
};

const FooterCTAs = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {userInfo ? (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.125,
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          exit={{ opacity: 0, y: 8 }}
          onClick={logoutHandler}
          className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full bg-indigo-700 px-3 py-3 text-4xl uppercase text-indigo-200 transition-colors hover:bg-white hover:text-indigo-600 md:bottom-4 md:right-4 md:px-6 md:text-2xl"
        >
          <span className="hidden md:block">logout</span> <FiArrowRight />
        </motion.button>
      ) : (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.125,
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          exit={{ opacity: 0, y: 8 }}
          className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full bg-indigo-700 px-3 py-3 text-4xl uppercase text-indigo-200 transition-colors hover:bg-white hover:text-indigo-600 md:bottom-4 md:right-4 md:px-6 md:text-2xl"
        >
          <Link to={"/login"} className="hidden md:block">
            login
          </Link>{" "}
          <FiArrowRight />
        </motion.button>
      )}
    </>
  );
};

const SOCIAL_CTAS = [
  {
    Component: SiInstagram,
    href: "#",
  },
  {
    Component: SiLinkedin,
    href: "#",
  },
  {
    Component: SiYoutube,
    href: "#",
  },
];

const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% - 32px)",
    height: "calc(100vh - 32px)",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "80px",
    height: "80px",
    transition: {
      delay: 0.75,
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
