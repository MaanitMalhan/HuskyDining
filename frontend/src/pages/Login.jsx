import React from "react";
import LoginNavbar from "../components/Navbar/LoginNavbar";
import Form from "../components/Form/Login_Form";
import Footer from "../components/Footer/Footer";

const Login = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <LoginNavbar />
      <Form />
      <Footer />
    </div>
  );
};

export default Login;
