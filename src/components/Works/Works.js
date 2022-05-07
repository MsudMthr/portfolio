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
      <div className="sm:h-4/6 absolute justify-end flex-wrap  gap-3 bottom-24  sm:top-20 sm:right-10  center sm:w-fit  w-screen  sm:flex-col">
        {data.map((item) => (
          <Link
            to={`/Project/${item.id}`}
            className="center flex-col relative game-card transition-ease"
            key={item.id}
          >
            <Work data={item} />
          </Link>
        ))}
        {/*        
        <Link
          to={"RockScissorsPaper"}
          className="center flex-col relative game-card transition-ease"
        >
          <img src={rock} className="h-20 rounded-md z-10" alt="rock" />
          <h4 className="absolute   text-xs font-semibold z-1">
            Rock Scissors Paper
          </h4>
        </Link>
        <Link
          to={"RockScissorsPaper"}
          className="center flex-col relative game-card transition-ease"
        >
          <img src={tic} className="h-20 rounded-md z-10" alt="rock" />
          <h4 className="absolute   text-xs font-semibold z-1">tic tac toe</h4>
        </Link>
        <Link
          to={"RockScissorsPaper"}
          className="center flex-col relative game-card transition-ease"
        >
          <img src={question} className="h-20 rounded-md z-10" alt="rock" />
          <h4 className="absolute   text-xs font-semibold z-1">
            Truth or dare
          </h4>
        </Link> */}
      </div>
    </div>
  );
};

export default Works;
