import React from "react";
import { useHistory } from "react-router-dom";
import s from "./NavItem.module.css";
import classNames from "classnames";

interface OwnProps {
  text: string;
  to: string;
  isActive: boolean;
  icon?: string;
}

export default function NavItem(props: OwnProps) {
  const history = useHistory();

  return (
    <div
      className={classNames(s.NavItem, props.isActive && s.Active)}
      onClick={() => history.push(props.to)}
    >
      <span className={s.Text}>{props.text}</span>
      {props.icon && <img className={s.Icon} src={props.icon} alt="" />}
    </div>
  );
}
