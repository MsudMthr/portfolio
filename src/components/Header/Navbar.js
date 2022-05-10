import React, { useEffect, useState } from "react";
import Theme from "../theme";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageMenu from "./LanguageMenu";

const Navbar = ({ navbarShow, setDirection }) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`flex justify-between items-center py-4 px-10 z-50 fixed w-full top-0 transition-ease ${
        navbarShow &&
        "bg-slate-100/5 bg-opacity-50  backdrop-blur-2xl shadow-lg"
      }`}
    >
      <div className="flex gap-4">
        <Link to={"/"} className="menu-link">
          {t("menu.1")}
        </Link>
        <Link to={"/Project"} className="menu-link">
          {t("menu.2")}
        </Link>
      </div>
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
