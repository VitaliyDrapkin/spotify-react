import React from "react";
import PlaylistCarousel from "../../components/PlaylistCarousel";
import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={s.HomePage}>
      <PlaylistCarousel></PlaylistCarousel>
    </div>
  );
}
