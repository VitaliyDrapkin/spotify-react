import React from "react";
import s from "./Content.module.css";
import ContentRouter from "../ContentRouter";

export default function Content() {
  return (
    <div className={s.Content}>
      <ContentRouter></ContentRouter>
    </div>
  );
}
