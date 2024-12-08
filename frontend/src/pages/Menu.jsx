import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CT_Menu_Cat from "../components/Menu/CT_Menu_Cat";
import TW_Menu_Cat from "../components/Menu/GTW_Menu_Cat";
import MC_Menu_Cat from "../components/Menu/MC_Menu_Cat";
import N_Menu_Cat from "../components/Menu/N_Menu_Cat";
import NW_Menu_Cat from "../components/Menu/NW_Menu_Cat";
import PT_Menu_Cat from "../components/Menu/PT_Menu_Cat";
import S_Menu_Cat from "../components/Menu/S_Menu_Cat";
import WH_Menu_Cat from "../components/Menu/WH_Menu_Cat";
import Footer from "../components/Footer/Footer";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <CT_Menu_Cat />
      <TW_Menu_Cat />
      <MC_Menu_Cat />
      <N_Menu_Cat />
      <NW_Menu_Cat />
      <PT_Menu_Cat />
      <S_Menu_Cat />
      <WH_Menu_Cat />
      <Footer />
    </div>
  );
};

export default Menu;
