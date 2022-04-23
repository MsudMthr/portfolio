import React, { useState, useRef, useEffect } from "react";

import PlayerControl from "./PlayerControl";
import PlayerDetail from "./PlayerDetail";


const Player = ({songs}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  const audioEl = useRef(null);

 

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);
  console.log();

  const nextSong = (forward = true) => {
    if (forward) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;
        if (temp > songs.length - 1) {
          temp = 0;
        }
        setIsPlaying(false);
        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = currentSongIndex - 1;
        }
        setIsPlaying(false);
        return temp;
      });
    }
  };

  console.log(songs);

  return (
    <div className="h-screen w-full bg-[#2a0b0b] center flex-col">
      <audio ref={audioEl} src={songs[currentSongIndex].src}></audio>
      <PlayerDetail song={songs[0]} />
      <PlayerControl nextSong={nextSong} />
      <p><strong>Next Up :</strong>{songs[nextSongIndex].title}</p>
    </div>
  );
};

export default Player;
