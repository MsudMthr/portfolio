import React from "react";

const Project = ({ data }) => {
  return (
    <div >
      <a
        href={data.href}
        rel="noreferrer"
        target="_blank"
        className="max-w-xl gap-2 flex-col center cursor-pointer"
      >
        <img
          src={data.image}
          alt={data.name}
          className="md:h-52 sm:h-36 shadow-md h-28 rounded-md"
        />
        <h1 className="font-bold">{data.name}</h1>
      </a>
    </div>
  );
};

export default Project;
