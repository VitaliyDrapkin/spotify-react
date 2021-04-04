import React, { useContext, useEffect } from "react";
import HomePage from "./HomePage";
import {
  setFeaturedPlaylistsAC,
  setMoodPlaylistsAC,
  setRecentlyPlaylistsAC,
} from "../../../../store/ActionCreators/PlaylistAC";
import { PlaylistsRequests } from "../../../../API/PlaylistsRequests";
import { PlaylistContext } from "../../../../store/Context/PlaylistProvider";

export default function ContainerHomePage() {
  const { state, dispatch } = useContext(PlaylistContext);

  useEffect(() => {
    async function fetchRecentlyPlayed() {
      const recentlyPlaylists = await PlaylistsRequests.getRecentlyPlayedPlaylists();
      dispatch(setRecentlyPlaylistsAC(recentlyPlaylists));
    }
    async function fetchFeatured() {
      const featuredPlaylists = await PlaylistsRequests.getFeaturedPlaylists();
      dispatch(setFeaturedPlaylistsAC(featuredPlaylists));
    }
    async function fetchMoodPlaylists() {
      const moodPlaylists = await PlaylistsRequests.getMoodPlaylists();
      dispatch(setMoodPlaylistsAC(moodPlaylists));
    }

    fetchRecentlyPlayed();
    fetchFeatured();
    fetchMoodPlaylists();
  }, [dispatch]);
  return (
    <HomePage
      recentlyPlaylists={state.recentlyPlaylists}
      moodPlaylists={state.moodPlaylists}
      featuredPlaylists={state.featuredPlaylists}
    ></HomePage>
  );
}
