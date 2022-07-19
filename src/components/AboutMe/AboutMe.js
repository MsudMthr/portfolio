import React from "react";
import { useTranslation } from "react-i18next";
import portfolio from '../../asset/masoud.JPG'

const AboutMe = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className=" dark:text-white mx-8 h-screen flex justify-center items-center  pt-20 md:pt-0">
      <div className="flex flex-col md:flex-row justify-around items-center gap-4 w-full ">
        <div className="md:w-96 w-80 px-5  mb-16 pt-52 md:mb-0 md:pt-0 md:mr-10">
          <h1 className="font-bold text-2xl mb-3">{t("aboutMe.1")}</h1>
          <p className="text-justify">{t("aboutMe.2")}</p>
        </div>
        <img src={portfolio} alt="masoud motahari" className=" w-80 h-64 rounded scale-125 hover:scale-150 transition transition-ease"/>
      </div>
    </div>
  );
};

export default AboutMe;
