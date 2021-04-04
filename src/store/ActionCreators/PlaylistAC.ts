import { playlistVM } from "../../models/view-models/playlist.vm";
import {
  SET_FEATURED_PLAYLISTS,
  SET_MOOD_PLAYLISTS,
  SET_RECENTLY_PLAYLISTS,
} from "./../../constants/actionTypes/playlists";

export type actionsTypes =
  | setFeaturedPlaylists
  | setMoodPlaylists
  | setRecentlyPlaylists;

type setFeaturedPlaylists = {
  type: typeof SET_FEATURED_PLAYLISTS;
  playlists: playlistVM[];
};

type setMoodPlaylists = {
  type: typeof SET_MOOD_PLAYLISTS;
  playlists: playlistVM[];
};
type setRecentlyPlaylists = {
  type: typeof SET_RECENTLY_PLAYLISTS;
  playlists: playlistVM[];
};

export const setFeaturedPlaylistsAC = (
  playlists: playlistVM[]
): setFeaturedPlaylists => {
  return {
    type: SET_FEATURED_PLAYLISTS,
    playlists,
  };
};

export const setMoodPlaylistsAC = (
  playlists: playlistVM[]
): setMoodPlaylists => {
  return {
    type: SET_MOOD_PLAYLISTS,
    playlists,
  };
};

export const setRecentlyPlaylistsAC = (
  playlists: playlistVM[]
): setRecentlyPlaylists => {
  return {
    type: SET_RECENTLY_PLAYLISTS,
    playlists,
  };
};
