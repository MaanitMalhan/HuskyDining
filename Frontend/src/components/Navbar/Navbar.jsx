import React from "react";
import { FaHome } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { TfiLayoutPlaceholder } from "react-icons/tfi";
import { NavButton } from "../Utilities/Button/NavButton";
import { NavLink } from "../Utilities/Links/navLink";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/authApiSlice";
import { logout } from "../../slices/authSlice";
import { Link } from "react-router-dom";

export const Navbar = ({ title }) => {
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
    <div className="fixed left-0 right-0 top-0 z-50 h-[50px] items-center border-b-2 border-neutral-950 bg-white px-2">
      <div className="float-left absolute top-1/2  -translate-y-1/2">
        {/* <NavButton logo={<FaHome />} /> */}
        <NavLink link={"/"} title={title} />
      </div>
      <div className="float-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link to={"/"} className="font-oi text-primary text-2xl tracking-wider">
          HUSKY · DINING
        </Link>
      </div>
      <div className="float-right mt-[10px] flex gap-2">
        {/* {userInfo && <NavButton logo={`${userInfo.flexpass} Flexpasses`} />}
        {userInfo && <NavButton logo={`${userInfo.points} Points`} />} */}
        {userInfo ? (
          <NavButton onClick={logoutHandler} logo={"Logout"} />
        ) : (
          <NavLink link={"/login"} title={"login"} />
        )}
      </div>
    </div>
  );
};
