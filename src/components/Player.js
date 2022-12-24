import React, { useContext, useEffect, useRef } from "react";
import { Songs } from "../context";
import "./PLayer.css";

export default function Player() {
  const { DataSongs, song, isPlaying, setIsPlaying, handleSetSong } =
    useContext(Songs);
  var audio = useRef();

  useEffect(() => {
    audio.current.src = DataSongs[0].url;
  }, []);

  const timeFormat = (seconds) => {
    const date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().slice(14, 19);
  };

  console.log(timeFormat(audio.current.currentTime.toFixed(2)));
  const handlePlaySong = () => {
    // audio.current = document.getElementById("audio.current");
    if (isPlaying) {
      audio.current.pause();
      setIsPlaying(false);
    } else {
      audio.current.play();
      setIsPlaying(true);
    }
  };

  const handleNextSong = () => {
    if (song.id >= DataSongs.length - 1) {
      handleSetSong(0);
    } else {
      handleSetSong(song.id + 1);
    }
    console.log(song.id);
    setIsPlaying(false);
  };

  const handlePrevSong = () => {
    if (!song.id) {
      handleSetSong(DataSongs.length - 1);
    } else {
      handleSetSong(song.id - 1);
    }
    setIsPlaying(false);
    // console.log(typeof(song.id));
  };

  return (
    <div className="h-24 flex justify-between bg-zinc-800 p-2 items-center c">
      <div className="p-2 w-[20%]">
        <h4 className="text-white mb-2 text-xl truncate">{song.name}</h4>
        <h5 className="text-zinc-500">{song.author}</h5>
      </div>
      <div className="w-[60%] text-white">
        <div className="flex justify-evenly mb-2 text-xl">
          <div className="btn-repeat ">
            <i className="fa-solid fa-repeat"></i>
          </div>

          <div
            className="btn-backward"
            onClick={() => {
              handlePrevSong();
            }}
          >
            <i className="fa-solid fa-backward-step"></i>
          </div>

          <div
            className={`btn-play ${isPlaying && "active"}`}
            onClick={() => handlePlaySong()}
          >
            <i className="btn_play--playing fa-solid fa-play"></i>
            <i className="btn_play--pause fa-solid fa-pause"></i>
          </div>

          <div
            className="btn-forward"
            onClick={() => {
              handleNextSong();
            }}
          >
            <i className="fa-solid fa-forward-step"></i>
          </div>

          <div className="btn-random">
            <i className="fa-solid fa-shuffle"></i>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span class="play_start">{timeFormat(audio.current.currentTime.toFixed(2))}</span>
          <input
            className="mx-2 mt-[2px]"
            id="progress"
            type="range"
            min="0"
            max="100"
            step="1"
          />
          <span class="play_finish">123</span>
        </div>
      </div>

      <div className="text-white w-[20%] justify-center flex items-center">
        <i className=" fa-sharp fa-solid fa-volume-high mr-1"></i>
        <input
          className="w-[50%px]"
          type="range"
          id="volume"
          min="0"
          max="100"
          step="1"
        />
      </div>

      <audio ref={audio} id="audio" src={song.url}></audio>
    </div>
  );
}
