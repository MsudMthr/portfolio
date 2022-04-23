import React, { useEffect, useState } from "react";
import Theme from "../theme";

const Navbar = ({ navbarBackground }) => {
  return (
    <div
      className={`flex justify-between items-center py-4 px-10 z-50 fixed w-full top-0 transition-ease ${
        navbarBackground &&
        "bg-slate-100/5 bg-opacity-50  backdrop-blur-2xl shadow-lg"
      }`}
    >
      <div className="flex gap-4">
        <a
          href="#projects"
          className="text-gray-500 font-medium hover:text-gray-900"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-gray-500 font-medium hover:text-gray-900"
        >
          contact
        </a>
      </div>
      <div>
        <Theme />
      </div>
    </div>
  );
};

export default Navbar;
