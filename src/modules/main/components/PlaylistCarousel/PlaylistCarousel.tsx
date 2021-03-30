import classNames from "classnames";
import React, { useState } from "react";
import Playlist from "../Playlist";
import s from "./PlaylistCarousel.module.css";

interface OwnProps {}

const playlists = [
  {
    description: "Start your day with calm and cool jazz.",
    image_url:
      "https://i.scdn.co/image/ab67706f000000035337e18dc6803780d806efba",
    name: "Jazzy Morning",
    playlist_id: "37i9dQZF1DXdziGPHNE40t",
  },
  {
    description:
      "The home for alternative electronic music. Cover: Fred again.. and The Blessed Madonna",
    image_url:
      "https://i.scdn.co/image/ab67706f0000000345e1025ae30404128c57d824",
    name: "Altar",
    playlist_id: "37i9dQZF1DXa71eg5j9dKZ",
  },
  {
    description:
      "the loose knit sweater, diy bedroom mural wall, alt milk of playlists. ✨ featuring Still Woozy",
    image_url:
      "https://i.scdn.co/image/ab67706f0000000330454e871ce5a1b00703716f",
    name: "Lorem",
    playlist_id: "37i9dQZF1DXdwmD5Q7Gxah",
  },
  {
    description: "Smooth joints. Cover: Ruti",
    image_url:
      "https://i.scdn.co/image/ab67706f00000003cb35da286acfe287316c4640",
    name: "Butter",
    playlist_id: "37i9dQZF1DWVzZlRWgqAGH",
  },
  {
    description: "Feel great with these timelessly fun songs!",
    image_url:
      "https://i.scdn.co/image/ab67706f00000003e649da22aa371c86c801603f",
    name: "Have a Great Day!",
    playlist_id: "37i9dQZF1DX7KNKjOK0o75",
  },
  {
    description: "Chill beats for cool coffeehouse vibes.",
    image_url:
      "https://i.scdn.co/image/ab67706f000000033f861d7f7b340e5e4934bb78",
    name: "Lo-Fi Cafe",
    playlist_id: "37i9dQZF1DX9RwfGbeGQwP",
  },
  {
    description: "Lounge and chill out music for your workday.",
    image_url:
      "https://i.scdn.co/image/ab67706f00000003f1ecb8caee4c015b3f33058a",
    name: "Workday Lounge",
    playlist_id: "37i9dQZF1DWT5lkChsPmpy",
  },
  {
    description:
      "Curl up in your favorite spot with some sweet, mellow tunes...",
    image_url:
      "https://i.scdn.co/image/ab67706f000000035ae7aa0454c9eafdd6505fda",
    name: "Your Favorite Coffeehouse",
    playlist_id: "37i9dQZF1DX6ziVCJnEm59",
  },
  {
    description: "Chillout hip-hop vibes. Cover: Kota The Friend",
    image_url:
      "https://i.scdn.co/image/ab67706f00000003dd2fb26650c3d75d8a32c972",
    name: "Mellow Bars",
    playlist_id: "37i9dQZF1DWT6MhXz0jw61",
  },
  {
    description: "High-Key bangers for Low-Key enjoyment.",
    image_url:
      "https://i.scdn.co/image/ab67706f00000003c0c5bb00461fd08b95f9b9da",
    name: "Low-Key",
    playlist_id: "37i9dQZF1DX2yvmlOdMYzV",
  },
];

export default function PlaylistCarousel(props: OwnProps) {
  const [showedPlaylists, setShowedPlaylists] = useState(playlists.slice(0, 5));
  const [navigateSide, setNavigateSide] = useState("left");

  const showNextPlaylists = () => {
    setShowedPlaylists(playlists.slice(5, 10));
    setNavigateSide("right");
  };
  const showPreviousPlaylists = () => {
    setShowedPlaylists(playlists.slice(0, 5));
    setNavigateSide("left");
  };

  return (
    <div className={s.PlaylistCarousel}>
      <div className={s.Top}>
        <div className={s.Title}>Recently played</div>
        <div className={s.NavArrows}>
          <div
            className={classNames(
              s.LeftArrow,
              navigateSide === "left" && s.DisabledArrow
            )}
            onClick={showPreviousPlaylists}
          ></div>
          <div
            className={classNames(
              s.RightArrow,
              (navigateSide === "right" || playlists.length < 5) &&
                s.DisabledArrow
            )}
            onClick={showNextPlaylists}
          ></div>
        </div>
      </div>
      <div className={s.Body}>
        {showedPlaylists.map((item) => {
          return (
            <div className={s.Playlist}>
              <Playlist
                image={item.image_url}
                title={item.name}
                description={item.description}
              ></Playlist>
            </div>
          );
        })}
        <div className={s.Empty}></div>
        <div className={s.Empty}></div>
        <div className={s.Empty}></div>
      </div>
    </div>
  );
}
