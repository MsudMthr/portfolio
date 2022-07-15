import React from "react";

const Project = ({ data }) => {
  return (
    <div className="">
      <div
        href={data.href}
        rel="noreferrer"
        target="_blank"
        className="center max-w-xl flex-col gap-2 "
      >
        <img
          src={data.image}
          alt={data.name}
          loading="lazy"
          className="h-28 rounded-md shadow-md sm:h-36 md:h-52"
        />
        <a
          href={data.href}
          rel="noreferrer"
          target="_blank"
          className="transition-ease border-b-2 border-gray-900 hover:text-violet-800 dark:border-b-2 dark:border-slate-200"
        >
          <h1 className="font-bold dark:text-emerald-100">{data.name}</h1>
        </a>
      </div>
    </div>
  );
};

export default Project;
