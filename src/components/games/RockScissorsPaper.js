import React, { useState, useEffect } from "react";
import { match } from "../../helper/rockScissorsPaper";

// import rockGif from "../../asset/video/rockpaperscissors.gif";
import scissors from "../../asset/icons/game/rockpaperscissors/scissors-svgrepo-com.svg";
import paper from "../../asset/icons/game/rockpaperscissors/paper-svgrepo-com.svg";
import rock from "../../asset/icons/game/rockpaperscissors/rock-svgrepo-com (1).svg";

const RockScissorsPaper = () => {
  const [cpuSelect, setCpuSelect] = useState("");
  const [selection, setSelection] = useState("");
  const [userPoint, setUserPoint] = useState(0);
  const [cpuPoint, setCpuPoint] = useState(0);
  const [result, setResult] = useState("");
  const possibilities = ["rock", "paper", "scissors"];

  useEffect(() => {
    if (selection) {
      setCpuSelect(() => {
        let number = Math.random() * 3;
        return possibilities[Math.floor(number)];
      });
    }
  }, [selection]);

  useEffect(() => {
    if (match(selection, cpuSelect) === "draw") {
      setResult("draw");
    } else if (match(selection, cpuSelect) === "Pc Win") {
      setResult("Pc Win");

      setCpuPoint((prevPoint) => prevPoint + 1);
    } else if (match(selection, cpuSelect) === "User Win") {
      setResult("User Win");

      setUserPoint((prevPoint) => prevPoint + 1);
    }
  },[selection , cpuSelect]);
  // console.log(match(selection , cpuSelect));
  const clickHandler = (event) => {
    setSelection(event.target.id);
    // console.log(event.target.id);
  };

  console.log(cpuSelect);
  console.log(selection);
  return (
    <div className="h-screen center bg-[#c85260]">
      <div>
        {/* <img src={rockGif} alt="rockpaperscissors" className="h-screen" /> */}
      </div>
      <div className="center absolute h-screen w-screen backdrop-blur-md ">
        <div className="flex gap-7">
          <div className="flex flex-col gap-8 ">
            <button
              onClick={clickHandler}
              id="rock"
              className="bg-amber-400 py-2 px-8 rounded-md shadow-2xl active:shadow-none"
            >
              <img src={rock} alt="rock" className="h-16" />
            </button>
            <button
              onClick={clickHandler}
              id="scissors"
              className="bg-amber-400 py-2 px-8 rounded-md shadow-2xl active:shadow-none"
            >
              <img src={scissors} alt="scissors" className="h-16" />
            </button>
            <button
              onClick={clickHandler}
              id="paper"
              className="bg-amber-400 py-2 px-8 rounded-md shadow-2xl active:shadow-none"
            >
              <img src={paper} alt="paper" className="h-16" />
            </button>
          </div>
          <div className="flex justify-between w-8/12">
            <div className="flex flex-col">
              <h3>You</h3>
              <span>{selection}</span>
              <h3>{userPoint}</h3>
            </div>
            <div className="flex flex-col">
              <h3>PC</h3>
              <span>{cpuSelect}</span>
              <h3>{cpuPoint}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RockScissorsPaper;
