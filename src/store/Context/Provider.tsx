import React from "react";
import PlaylistProvider from "./PlaylistProvider";

interface OwnProps {
  children: React.ReactNode;
}

export default function Provider(props: OwnProps) {
  return <PlaylistProvider>{props.children}</PlaylistProvider>;
}
