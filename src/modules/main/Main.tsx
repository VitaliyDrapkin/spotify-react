import React from "react";
import NavBar from "./NavBar";
import s from "./Main.module.css";
import Content from "./Content";

export default function Main() {
  return (
    <div className={s.Main}>
      <NavBar></NavBar>
      <Content></Content>
    </div>
  );
}
