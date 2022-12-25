import React, { useContext, useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../context";
import "./PLayer.css";

export default function Player() {
  const { song, handleSetSong, DataSongs, thumbnail, scrollToActiveView } =
    useContext(Songs);
  const audio = useRef();

  useEffect(() => {
    if (thumbnail.current) {
      var cdRotate = thumbnail.current.animate(
        [{ transform: "rotate(360deg)" }],
        {
          duration: 10000,
          iterations: Infinity,
        }
      );
    }
    cdRotate.pause();
    audio.current.audio.current.onplay = () => {
      // setRotate(true);
      cdRotate.play();
    };
    audio.current.audio.current.onpause = () => {
      // setRotate(false);
      cdRotate.pause();
    };
  }, []);

  const handleClickNext = () => {
    if (song.id >= DataSongs.length - 1) {
      handleSetSong(0);
      scrollToActiveView();
    } else {
      handleSetSong(song.id + 1);
      scrollToActiveView();
    }
    // console.log(song.id);
  };

  const handleClickPrev = () => {
    if (!song.id) {
      handleSetSong(DataSongs.length - 1);
      scrollToActiveView();
    } else {
      handleSetSong(song.id - 1);
      scrollToActiveView();
    }
  };

  return (
    <div>
      <AudioPlayer
        ref={audio}
        className="player"
        src={song.url}
        layout="stacked-reverse"
        showJumpControls={false}
        showSkipControls={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
      />
    </div>
  );
}
