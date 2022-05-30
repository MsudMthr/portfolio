import React from "react";
import useTitle from "../../hooks/useTitle"


import { useParams, UseNavigate } from "react-router-dom";
import { data } from "../../App";

const DetailWorks = () => {
  const { id } = useParams();
  const project = data[id - 1];
  useTitle(`Portfolio/Projects/${project.name}`)
  
  return (
    <div className="pt-32 h-screen ">
      <div className="flex  flex-col items-center gap-6">
        <h1 className="font-bold capitalize dark:text-white">{project.name}</h1>
        <div className="flex justify-around w-full items-center">
          <ul className=" text-center capitalize dark:text-white ">
            <h5 className="font-bold">Capabilities</h5>
            {project.capabilities.map((ability) => (
              <li className="my-2">{ability}</li>
            ))}
          </ul>
          <img src={project.image} alt={project.name} className="w-4/12 md:w-6/12 border-2 rounded shadow-md" />
          <ul className=" text-center capitalize dark:text-white ">
            <h5 className="font-bold">Technology</h5>
            {project.technology.map((technology) => (
              <li className="my-2">{technology}</li>
            ))}
          </ul>
        </div>
        <a href={project.href} rel="noreferrer" target="_blank" className="font-bold text-2xl text-teal-800 underline dark:text-emerald-200" >Visit Site</a>
      </div>
    </div>
  );
};

export default DetailWorks;
