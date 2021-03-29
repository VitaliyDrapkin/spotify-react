import React from "react";
import s from "./Playlist.module.css";

interface OwnProps {
  image: string;
  title: string;
  description: string;
}

export default function Playlist(props: OwnProps) {
  return (
    <div className={s.Playlist}>
      <div className={s.Image}>
        <img src={props.image} alt="" />
      </div>
      <div className={s.Title}>{props.title}</div>
      <div className={s.Description}>{props.description}</div>
    </div>
  );
}
