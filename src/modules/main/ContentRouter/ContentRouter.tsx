import React from "react";
import { Redirect, Route, Switch } from "react-router";
import HomePage from "../pages/Home";
import BrowsePage from "../pages/Browse";
import LikedSongsPage from "../pages/LikedSongs";
import PlaylistPage from "../pages/Playlist";

export default function ContentRouter() {
  return (
    <div>
      <Switch>
        <Redirect from="/" to="/home" exact></Redirect>
        <Route path="/home" component={HomePage} />
        <Route path="/playlist" component={PlaylistPage} />
        <Route path="/browse" component={BrowsePage} />
        <Route path="/liked" component={LikedSongsPage} />
      </Switch>
    </div>
  );
}
