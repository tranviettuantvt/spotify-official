import React, { useContext } from "react";
import { Songs } from "../context";

export default function DetailSong() {
  const {song} =useContext(Songs)

  return (
    <div className="col-span-1 ml-4 pt-2">
      <div className="w-[80%] text-center">
        <h2 className="text-green-500 font-bold text-2xl">Now Playing</h2>
        <h2 className="text-white text-2xl">{song.name}</h2>
      </div>
      <div className="w-[80%] h-[70%] mt-10">
        <img
          className="w-full h-full"
          src={song.links.images[0].url}
          alt="avatar"
        />
      </div>
      {/* <div className="flex justify-evenly items-center mt-10">
        <img
          className="w-[70px] rounded-full"
          src="https://wallpaperaccess.com/full/5574864.jpg"
          alt="avatar2"
        />
        <span className="text-xl text-white">Alan Walker</span>
      </div> */}
    </div>
  );
}
