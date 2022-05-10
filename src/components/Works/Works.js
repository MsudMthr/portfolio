import React from "react";
import { Link, Route, Routes } from "react-router-dom";
//media
import video from "../../asset/video/animated_medium20211213-29340-b52jd8.mp4";

import { data } from "../../App";
import Work from "./Work";

const Works = () => {
  console.log(data);
  return (
    <div className=" h-screen w-full bg-[#ddd4cd]">
      <div>
        <video
          src={video}
          autoPlay
          loop
          muted
          width={"100vw"}
          className="h-screen w-screen"
        ></video>
      </div>
      <div className="sm:h-4/6 absolute justify-end md:flex-nowrap flex-wrap  gap-3 bottom-24  sm:top-20 sm:right-10  center sm:w-fit  w-screen  sm:flex-col">
        {data.map((item) => (
          <Link
            to={`/Project/${item.id}`}
            className="center flex-col relative game-card transition-ease"
            key={item.id}
          >
            <Work data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Works;
