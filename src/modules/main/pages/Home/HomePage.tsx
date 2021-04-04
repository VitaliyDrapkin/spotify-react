import React from "react";
import { playlistVM } from "../../../../models/view-models/playlist.vm";
import PlaylistCarousel from "../../components/PlaylistCarousel";
import s from "./HomePage.module.css";

interface OwnProps {
  recentlyPlaylists: playlistVM[];
  featuredPlaylists: playlistVM[];
  moodPlaylists: playlistVM[];
}

export default function HomePage(props: OwnProps) {
  return (
    <div className={s.HomePage}>
      <PlaylistCarousel
        playlistName={"Recently played"}
        playlists={props.recentlyPlaylists}
      ></PlaylistCarousel>
      <PlaylistCarousel
        playlistName={"Featured playlists"}
        playlists={props.featuredPlaylists}
      ></PlaylistCarousel>
      <PlaylistCarousel
        playlistName={"Mood"}
        playlists={props.moodPlaylists}
      ></PlaylistCarousel>
    </div>
  );
}
