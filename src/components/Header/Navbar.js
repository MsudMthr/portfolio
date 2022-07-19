import React, { useEffect, useState } from "react";
import Theme from "../theme";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageMenu from "./LanguageMenu";

const Navbar = ({ navbarShow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`flex justify-between items-center py-4 px-10 z-50 fixed w-full top-0 transition-ease  relative${
        navbarShow &&
        "bg-slate-100/5 bg-opacity-50  backdrop-blur-2xl shadow-lg"
      }`}
    >
      <div
        className={`flex flex-col sm:flex-row z-30 gap-4 menu absolute sm:relative sm:translate-x-0 sm:scale-100  ${
          isOpen ? "translate-x-8 translate-y-8 " : "-translate-x-[200%] scale-0 "
        }`}
      >
        <Link to={"/"} className="menu-link">
          {t("menu.1")}
        </Link>
        <Link to={"/Project"} className="menu-link">
          {t("menu.2")}
        </Link>
        <Link to={"/AboutMe"} className="menu-link">
          {t("menu.3")}
        </Link>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden flex flex-col justify-between h-3.5 w-5  "
      >
        <span className={`burgerLine ${isOpen && "rotate-45"}`}></span>
        <span className={`burgerLine ${isOpen && "scale-0"}`}></span>
        <span className={`burgerLine ${isOpen && "-rotate-45"}`}></span>
      </button>
      <button
        onClick={() => setIsOpen(false)}
        className={` z-0 sm:hidden ${
          isOpen &&
          "absolute top-0 left-0 z-0 h-screen w-screen bg-black opacity-75"
        }`}
      ></button>
      <div>
        <div className="flex ">
          <LanguageMenu />
          <Theme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
