import React from "react";
import { useLocation } from "react-router";
import NavItem from "../components/NavItem";
import s from "./NavBar.module.css";

import home_icon from "../../../assets/home_icon.png";
interface NavItem {
  text: string;
  to: string;
  icon?: string;
}

const navItems: NavItem[] = [
  { text: "Home", to: "/home", icon: home_icon },
  { text: "Browse", to: "/browse" },
  { text: "Home", to: "/home" },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <div className={s.NavBar}>
      <NavItem
        text={"Home"}
        to={"/home"}
        isActive={location.pathname === "/home"}
        icon={home_icon}
      ></NavItem>
      <NavItem text={"Browse"} to={"/browse"} isActive={false}></NavItem>
      <NavItem text={"Liked Songs"} to={"/liked"} isActive={false}></NavItem>
    </div>
  );
}
