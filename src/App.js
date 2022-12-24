import { useState } from "react";
import "./App.css";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import { Songs } from "./context";
import DataSongs from './data/songs.json'

function App() {
  const [song, setSong]=useState(DataSongs[0])
  const [isPlaying, setIsPlaying]=useState(false)

  const handleSetSong=(songId) => {
    setSong(DataSongs[songId])
  }

  return (
    <div className="App">
      <Songs.Provider value={{DataSongs, song, handleSetSong, isPlaying, setIsPlaying}}>
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
