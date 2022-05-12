import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" w-8 h-8 flex justify-center items-center   bg-violet-700/30  animate-ping rounded-full"></div>
      <div className=" w-8 h-8 flex justify-center items-center   bg-violet-700/30  animate-ping rounded-full"></div>
      <div className=" w-8 h-8 flex justify-center items-center   bg-violet-700/30  animate-ping rounded-full "></div>
    </div>
  );
};

export default Loader;
