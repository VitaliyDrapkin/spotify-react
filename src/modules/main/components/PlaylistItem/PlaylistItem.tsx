import React, { useContext } from "react";
import { useHistory } from "react-router";
import { playlistVM } from "../../../../models/view-models/playlist.vm";
import {
  setHeaderDescriptionAC,
  setHeaderImageAC,
  setHeaderTitleAC,
} from "../../../../store/ActionCreators/PlaylistAC";
import { PlaylistContext } from "../../../../store/Context/PlaylistProvider";
import s from "./PlaylistItem.module.css";

interface OwnProps {
  playlist: playlistVM;
}

export default function PlaylistItem(props: OwnProps) {
  const history = useHistory();
  const { dispatch } = useContext(PlaylistContext);

  const onPlaylistClick = () => {
    dispatch(setHeaderTitleAC(props.playlist.name));
    dispatch(setHeaderDescriptionAC(props.playlist.description));
    dispatch(setHeaderImageAC(props.playlist.image));
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
