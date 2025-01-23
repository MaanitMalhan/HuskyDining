import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const originalTitle = "Husky Dining";
  const inactiveTitle = "...still hungry :(";

  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden ? inactiveTitle : originalTitle;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="">
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default App;
