import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Category2 from "../components/Category/Category2";
import Steps from "../components/Steps/Steps";
import Footer from "../components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
      <Category />
      <Category2 />

      <Footer />
    </div>
  );
};

export default App;
