import React from "react";
import { useHistory } from "react-router";
import { playlistVM } from "../../../../models/view-models/playlist.vm";
import s from "./PlaylistItem.module.css";

interface OwnProps {
  playlist: playlistVM;
}

export default function PlaylistItem(props: OwnProps) {
  const history = useHistory();

  const onPlaylistClick = () => {
    history.push(`/playlist/${props.playlist.id}`);
  };
  return (
    <div className={s.PlaylistItem} onClick={onPlaylistClick}>
      <div className={s.Image}>
        <img src={props.playlist.image} alt="" />
      </div>
      <div className={s.Title}>{props.playlist.name}</div>
      <div className={s.Description}>{props.playlist.description}</div>
    </div>
  );
}
