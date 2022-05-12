import React from "react";
import { useTranslation } from "react-i18next";
import portfolio from '../../asset/portfolio.png'

const AboutMe = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className=" dark:text-white mx-8 h-screen flex justify-center items-center ">
      <div className="flex flex-col md:flex-row justify-around items-center gap-4 w-full">
        <div className="w-96 ">
          <h1 className="font-bold text-2xl">{t("aboutMe.1")}</h1>
          <p className="text-justify">{t("aboutMe.2")}</p>
        </div>
        <img src={portfolio} alt="masoud motahari" className=" w-80 h-64 rounded"/>
      </div>
    </div>
  );
};

export default AboutMe;
