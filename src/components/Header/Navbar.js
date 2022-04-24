import React, { useEffect, useState } from "react";
import Theme from "../theme";
import { Link } from "react-router-dom";

const Navbar = ({ navbarShow }) => {
  return (
    <div
      className={`flex justify-between items-center py-4 px-10 z-50 fixed w-full top-0 transition-ease ${
        navbarShow &&
        "bg-slate-100/5 bg-opacity-50  backdrop-blur-2xl shadow-lg"
      }`}
    >
      <div className="flex gap-4">
        <Link to={'/'} className="menu-link">
          Home
        </Link>
        <Link to={"/games"} className="menu-link">
          Games
        </Link>
      </div>
      <div>
        <Theme />
      </div>
    </div>
  );
};

export default Navbar;
