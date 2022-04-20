import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex flex-col gap-10 bg-zinc-100 h-screen">
      <Navbar />
      <div className="center flex-col h-full gap-5 text-center">
        <h1 className="font-bold text-4xl md:text-6xl">Hey, I'm Masoud ;{`)`}</h1>
        <h6 className="font-semibold text-xl md:text-3xl">I'm a Front End Developer living in Mashhad</h6>
        <button className="button">CONTACT ME</button>
      </div>
    </div>
  );
};

export default Header;
