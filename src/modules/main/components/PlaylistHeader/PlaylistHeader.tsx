import React from "react";
import s from "./PlaylistHeader.module.css";

const styles = {
  paperContainer: {
    backgroundImage: `url(${"http://api.sprintt.co/spotify/images/world/w_10.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  },
};

export default function PlaylistHeader() {
  return (
    <div className={s.PlaylistHeader} style={styles.paperContainer}>
      <div className={s.Main}>
        <div className={s.Left}>
          <div className={s.Name}>Saturday Morning</div>
          <div className={s.Description}>Start off your saturday </div>
        </div>
        <div className={s.Right}>
          <div className={s.SongsCount}>50 songs</div>
          <div className={s.Duration}>2 hr 30 min</div>
        </div>
      </div>
    </div>
  );
}
