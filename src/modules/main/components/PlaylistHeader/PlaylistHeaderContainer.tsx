import React, { useContext } from "react";
import { PlaylistContext } from "../../../../store/Context/PlaylistProvider";
import PlaylistHeader from "./PlaylistHeader";

export default function PlaylistHeaderContainer() {
  const { state } = useContext(PlaylistContext);
  return (
    <PlaylistHeader
      title={state.playlistPageHeader.title}
      image={state.playlistPageHeader.image}
      description={state.playlistPageHeader.description}
      length={state.playlistPageHeader.length}
      duration={state.playlistPageHeader.duration}
    ></PlaylistHeader>
  );
}
