import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex flex-col gap-10 banner  h-screen">
      <Navbar />
      <div className="center flex-col h-full gap-5 text-center z-30">
        <h1 className="font-bold text-4xl md:text-6xl text-amber-100">Hey, I'm Masoud ;{`)`}</h1>
        <h6 className="font-semibold text-xl md:text-3xl text-red-100 italic ">I'm a Front End Developer living in Mashhad</h6>
        <a href="#contact" className="button transition-ease ">CONTACT ME</a>
      </div>
    </div>
  );
};

export default Header;
