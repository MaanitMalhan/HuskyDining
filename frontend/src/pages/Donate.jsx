import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Donation_Form } from "../components/Form/Donation_Form";

const Donate = () => {
  return (
    <div>
      <Navbar />
      <Donation_Form />
      <Footer />
    </div>
  );
};

export default Donate;
