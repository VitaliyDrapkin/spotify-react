import { playlistVM } from "../../models/view-models/playlist.vm";
import {
  SET_FEATURED_PLAYLISTS,
  SET_MOOD_PLAYLISTS,
  SET_RECENTLY_PLAYLISTS,
  SET_HEADER_DESCRIPTION,
  SET_HEADER_DURATION,
  SET_HEADER_LENGTH,
  SET_HEADER_TITLE,
  SET_HEADER_IMAGE,
} from "./../../constants/actionTypes/playlists";

export type actionsTypes =
  | setFeaturedPlaylists
  | setMoodPlaylists
  | setRecentlyPlaylists
  | setHeaderTitle
  | setHeaderDescription
  | setHeaderLength
  | setHeaderDuration
  | setHeaderImage;

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
type setHeaderTitle = {
  type: typeof SET_HEADER_TITLE;
  title: string;
};
type setHeaderDescription = {
  type: typeof SET_HEADER_DESCRIPTION;
  description: string;
};
type setHeaderLength = {
  type: typeof SET_HEADER_LENGTH;
  length: string;
};
type setHeaderDuration = {
  type: typeof SET_HEADER_DURATION;
  duration: string;
};
type setHeaderImage = {
  type: typeof SET_HEADER_IMAGE;
  image: string;
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
export const setHeaderTitleAC = (title: string): setHeaderTitle => {
  return {
    type: SET_HEADER_TITLE,
    title,
  };
};
export const setHeaderDescriptionAC = (
  description: string
): setHeaderDescription => {
  return {
    type: SET_HEADER_DESCRIPTION,
    description,
  };
};
export const setHeaderLengthAC = (length: string): setHeaderLength => {
  return {
    type: SET_HEADER_LENGTH,
    length,
  };
};
export const setHeaderDurationAC = (duration: string): setHeaderDuration => {
  return {
    type: SET_HEADER_DURATION,
    duration,
  };
};
export const setHeaderImageAC = (image: string): setHeaderImage => {
  return {
    type: SET_HEADER_IMAGE,
    image,
  };
};
