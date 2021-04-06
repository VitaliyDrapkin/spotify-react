import React from "react";
import s from "./PlaylistHeader.module.css";

interface ownProps {
  title: string;
  image: string;
  description: string;
  length: string;
  duration: string;
}

export default function PlaylistHeader(props: ownProps) {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${props.image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      backgroundPosition: "50% 75%",
    },
  };

  return (
    <div className={s.PlaylistHeader} style={styles.paperContainer}>
      <div className={s.Main}>
        <div className={s.Left}>
          <div className={s.Title}>{props.title}</div>
          <div className={s.Description}>{props.description}</div>
        </div>
        <div className={s.Right}>
          <div className={s.Length}>50 songs</div>
          <div className={s.Duration}>2 hr 30 min</div>
        </div>
      </div>
    </div>
  );
}
