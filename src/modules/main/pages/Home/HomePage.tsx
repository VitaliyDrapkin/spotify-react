import React from "react";
import Playlist from "../../components/Playlist";
import s from "./HomePage.module.css";

const playlist2 = {
  description: "Start your day by chilling",
  image_url: "https://i.scdn.co/image/ab67706f000000035337e18dc6803780d806efba",
  name: "Saturday Morning Can’t Be Better",
  playlist_id: "3533",
};
const playlist = {
  description: "Listen to the best songs from the 60's",
  image_url: "https://i.scdn.co/image/ab67706f000000035337e18dc6803780d806efba",
  name: "Best of 60's",
  playlist_id: "3533",
};
export default function HomePage() {
  return (
    <div className={s.HomePage}>
      <Playlist
        image={playlist.image_url}
        title={playlist.name}
        description={playlist.description}
      ></Playlist>
    </div>
  );
}
