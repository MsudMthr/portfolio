import React, { useRef } from "react";
import useTitle from "../../hooks/useTitle";
import { useTranslation } from "react-i18next";

import { useParams, UseNavigate } from "react-router-dom";
import { data } from "../../projectData";

const DetailWorks = () => {
  const { id } = useParams();
  const project = data[id - 1];
  const { t, i18n } = useTranslation();
  const projectRef = useRef();

  const fullScreenImageHandler = () => {
    projectRef.current.requestFullscreen();
  };

  useTitle(`Portfolio/Projects/${project.name}`);

  return (
    <div className="h-screen pt-32 ">
      <div className="flex  flex-col items-center gap-6">
        <h1 className="font-bold capitalize dark:text-white">{project.name}</h1>
        <div className="flex w-full items-center justify-around">
          <ul className=" text-center capitalize dark:text-white ">
            <h5 className="font-bold">{t("ProjectDetail.2")}</h5>
            {project.capabilities.map((ability) => (
              <li className="my-2">{ability}</li>
            ))}
          </ul>
          <img
            src={project.image}
            alt={project.name}
            ref={projectRef}
            onClick={fullScreenImageHandler}
            className="w-4/12 rounded border-2 shadow-md md:w-6/12"
          />
          <ul className=" text-center capitalize dark:text-white ">
            <h5 className="font-bold">{t("ProjectDetail.1")}</h5>
            {project.technology.map((technology) => (
              <li className="my-2">{technology}</li>
            ))}
          </ul>
        </div>
        <a
          href={project.href}
          rel="noreferrer"
          target="_blank"
          className="text-2xl font-bold text-teal-800 underline dark:text-emerald-200"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default DetailWorks;
