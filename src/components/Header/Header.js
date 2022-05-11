import React from "react";
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col gap-10 banner   h-screen">
      <div className="center flex-col h-full gap-5 text-center z-30">
        <h1 className="font-bold text-4xl md:text-6xl text-amber-100">
          {t("name.1") }
        </h1>
        <h6 className="font-semibold text-xl md:text-3xl text-red-100 italic capitalize ">
          {t("details.1")}
        </h6>
        <p className="text-violet-400 sm:w-96 w-[300px] font-medium  drop-shadow-lg ">{t("details.2")}</p>
        <a href="#contact" className="button transition-ease ">
          {t("contact")}
        </a>
      </div>
    </div>
  );
};

export default Header;
