import React, { createContext, useReducer } from "react";
import {
  SET_FEATURED_PLAYLISTS,
  SET_MOOD_PLAYLISTS,
  SET_RECENTLY_PLAYLISTS,
  SET_HEADER_DESCRIPTION,
  SET_HEADER_DURATION,
  SET_HEADER_LENGTH,
  SET_HEADER_TITLE,
  SET_HEADER_IMAGE,
} from "../../constants/actionTypes/playlists";
import { playlistVM } from "../../models/view-models/playlist.vm";
import { actionsTypes } from "../ActionCreators/PlaylistAC";

export interface PlaylistContextType {
  state: initialStateType;
  dispatch: React.Dispatch<actionsTypes>;
}
export const PlaylistContext = createContext<PlaylistContextType>(null);

interface OwnProps {
  children: React.ReactNode;
}

interface initialStateType {
  recentlyPlaylists: playlistVM[];
  featuredPlaylists: playlistVM[];
  moodPlaylists: playlistVM[];
  playlistPageHeader: {
    title: string;
    image: string;
    description: string;
    length: string;
    duration: string;
  };
}

const initialState: initialStateType = {
  recentlyPlaylists: [],
  featuredPlaylists: [],
  moodPlaylists: [],
  playlistPageHeader: {
    title: "",
    image: "",
    description: "",
    length: "",
    duration: "",
  },
};

function reducer(
  state: initialStateType,
  action: actionsTypes
): initialStateType {
  switch (action.type) {
    case SET_FEATURED_PLAYLISTS:
      return {
        ...state,
        featuredPlaylists: action.playlists,
      };
    case SET_MOOD_PLAYLISTS:
      return { ...state, moodPlaylists: action.playlists };
    case SET_RECENTLY_PLAYLISTS:
      return { ...state, recentlyPlaylists: action.playlists };
    case SET_HEADER_TITLE:
      return {
        ...state,
        playlistPageHeader: {
          ...state.playlistPageHeader,
          title: action.title,
        },
      };
    case SET_HEADER_DESCRIPTION:
      return {
        ...state,
        playlistPageHeader: {
          ...state.playlistPageHeader,
          description: action.description,
        },
      };
    case SET_HEADER_DURATION:
      return {
        ...state,
        playlistPageHeader: {
          ...state.playlistPageHeader,
          duration: action.duration,
        },
      };
    case SET_HEADER_LENGTH:
      return {
        ...state,
        playlistPageHeader: {
          ...state.playlistPageHeader,
          length: action.length,
        },
      };
    case SET_HEADER_IMAGE:
      return {
        ...state,
        playlistPageHeader: {
          ...state.playlistPageHeader,
          image: action.image,
        },
      };
    default:
      return state;
  }
}

const PlaylistProvider = (props: OwnProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PlaylistContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
