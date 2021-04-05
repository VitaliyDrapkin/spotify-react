import React from "react";
import PlaylistHeader from "../../components/PlaylistHeader";
import s from "./PlaylistPage.module.css";

export default function PlaylistPage() {
  return (
    <div className={s.PlaylistPage}>
      <PlaylistHeader></PlaylistHeader>
    </div>
  );
}
