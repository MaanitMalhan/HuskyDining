import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../slices/authApiSlice";
import { logout } from "../../slices/authSlice";
import { FiChevronDown } from "react-icons/fi";

// Import the button image
import buttonImage from "../../assets/button.png";

export const Navbar = () => {
  return <Header />;
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const menuRef = useRef(null);

  const logoutHandler = async () => {
    await logoutApiCall().unwrap();
    dispatch(logout());
    navigate("/");
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
        {/* Left Side: Button Image + Name */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={buttonImage}
            alt="Button Icon"
            className="h-14 w-14 object-contain rounded-lg"
          />
          <span className="text-2xl font-bold text-indigo-700">HuskyDining</span>
        </Link>

        {/* Right Side: Navigation Links */}
        <nav className="flex gap-8 text-indigo-600 font-semibold text-lg items-center relative" ref={menuRef}>
          <Link to="/" className="hover:text-indigo-800">Home</Link>
          {userInfo ? (
            <>
              <span className="italic text-indigo-700 text-base font-semibold">
                Hi, {userInfo.name || userInfo.email}
              </span>
              <button onClick={logoutHandler} className="hover:text-indigo-800 font-semibold">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-indigo-800 font-semibold">Login</Link>
          )}

          {/* Menu Dropdown */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="hover:text-indigo-800 flex items-center gap-1"
          >
            Pages
            <FiChevronDown
              className={`transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute top-14 right-0 bg-white border border-indigo-100 shadow-xl rounded-lg p-4 w-48 z-50"
              >
                <div className="flex flex-col gap-3 text-indigo-600 text-sm font-medium">
                  <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                  <Link to="/request" onClick={() => setMenuOpen(false)}>Request</Link>
                  <Link to="/donate" onClick={() => setMenuOpen(false)}>Donate</Link>
                  <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                  <Link to="/menu" onClick={() => setMenuOpen(false)}>Full Menu</Link>
                  {userInfo && (
                    <Link to={`/dashboard/${userInfo._id}`} onClick={() => setMenuOpen(false)}>
                      Dashboard
                    </Link>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Spacer to prevent content underlap */}
      <div className="h-20" />
    </>
  );
};