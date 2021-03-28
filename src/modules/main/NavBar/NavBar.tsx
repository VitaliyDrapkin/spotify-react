import React from "react";
import { useLocation } from "react-router";
import NavItem from "../components/NavItem";
import s from "./NavBar.module.css";

import home_icon from "../../../assets/home_icon.png";
import browse_icon from "../../../assets/browse_icon.png";
import liked_songs_icon from "../../../assets/liked_songs_icon.png";
import logo from "../../../assets/logo.png";

interface NavItemType {
  text: string;
  to: string;
  icon?: string;
}

const navItems: NavItemType[] = [
  { text: "Home", to: "/home", icon: home_icon },
  { text: "Browse", to: "/browse", icon: browse_icon },
  { text: "Liked songs", to: "/liked", icon: liked_songs_icon },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <div className={s.NavBar}>
      <div className={s.Logo}>
        <img src={logo} alt="" />
      </div>
      {navItems.map((navItem) => (
        <NavItem
          text={navItem.text}
          to={navItem.to}
          isActive={location.pathname === navItem.to}
          icon={navItem.icon}
        ></NavItem>
      ))}
    </div>
  );
}
