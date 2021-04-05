import React, { useEffect, useState } from "react";
import classNames from "classnames";
import PlaylistItem from "../PlaylistItem";
import s from "./PlaylistCarousel.module.css";
import { playlistVM } from "../../../../models/view-models/playlist.vm";

interface OwnProps {
  playlistName: string;
  playlists: playlistVM[];
}

export default function PlaylistCarousel(props: OwnProps) {
  const [showedPlaylists, setShowedPlaylists] = useState([]);

  useEffect(() => {
    setShowedPlaylists(props.playlists.slice(0, 5));
  }, [props.playlists]);

  const [navigateSide, setNavigateSide] = useState("left");

  const showNextPlaylists = () => {
    setShowedPlaylists(props.playlists.slice(5, 10));
    setNavigateSide("right");
  };
  const showPreviousPlaylists = () => {
    setShowedPlaylists(props.playlists.slice(0, 5));
    setNavigateSide("left");
  };

  return (
    <div className={s.PlaylistCarousel}>
      <div className={s.Top}>
        <div className={s.Title}>{props.playlistName}</div>
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
              (navigateSide === "right" || props.playlists.length < 5) &&
                s.DisabledArrow
            )}
            onClick={showNextPlaylists}
          ></div>
        </div>
      </div>
      <div className={s.Body}>
        {showedPlaylists.map((item) => {
          return (
            <div className={s.Playlist} key={item.id}>
              <PlaylistItem playlist={item}></PlaylistItem>
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
