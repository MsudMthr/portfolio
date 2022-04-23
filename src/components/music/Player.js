import React, { useState, useEffect } from "react";

import { fetchData } from "../../service/api";


const Player = () => {
  const [song, setSong] = useState();
  const [searchSongs, setSearchSongs] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    setSong(fetchData(searchSongs))
  } , [searchSongs])

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const keyHandler = event => {
    if (event.key === "Enter") setSearchSongs(value)
  }

  console.log(song);

  return (
    <div className="h-screen w-screen">
      <input value={value} onChange={changeHandler} onKeyPress={keyHandler} />
    </div>
  );
};

export default Player;
