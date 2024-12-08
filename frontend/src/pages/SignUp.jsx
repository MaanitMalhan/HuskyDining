import React, { useState } from "react";
import Signup_Form from "../components/Form/Signup_Form";
import SignupNavbar from "../components/Navbar/SignupNavbar";
import Footer from "../components/Footer/Footer";

const SignUp = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <SignupNavbar />
      <Signup_Form />
      <Footer />
    </div>
  );
};

export default SignUp;
