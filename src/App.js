import { useRef, useState } from "react";
import "./App.css";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import { Songs } from "./context";
import DataSongs from "./data/songs.json";

function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const thumbnail = useRef();

  const handleSetSong = (songId) => {
    const song = DataSongs.find((song) => song.id === songId);
    setSong(song);
  };
  const a = document.querySelector("tr.active");
  const scrollToActiveView = function () {
    setTimeout(function () {
      if (a) {
        a.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 200);
  };

  return (
    <div className="App">
      <Songs.Provider
        value={{
          DataSongs,
          song,
          handleSetSong,
          thumbnail,
          scrollToActiveView,
        }}
      >
        <Navbar />
        <div className="grid grid-cols-3 bg-neutral-900 h-screen-navbar-player overflow-hidden">
          <DetailSong />
          <ListSong />
        </div>
        <Player />
      </Songs.Provider>
    </div>
  );
}

export default App;
