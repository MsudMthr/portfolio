import React from "react";

const Project = ({ data }) => {
  return (
    <div className="">
      <div
        href={data.href}
        rel="noreferrer"
        target="_blank"
        className="max-w-xl gap-2 flex-col center "
      >
        <img
          src={data.image}
          alt={data.name}
          loading="lazy"
          className="md:h-52 sm:h-36 shadow-md h-28 rounded-md"
        />
        <a
          href={data.href}
          rel="noreferrer"
          target="_blank"
          className="border-b-2 border-gray-900 dark:border-slate-200 dark:border-b-2 hover:text-violet-800 transition-ease"
        >
          <h1 className="font-bold dark:text-emerald-100">{data.name}</h1>
        </a>
      </div>
    </div>
  );
};

export default Project;
