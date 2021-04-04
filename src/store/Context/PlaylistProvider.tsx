import React, { createContext, useReducer } from "react";
import {
  SET_FEATURED_PLAYLISTS,
  SET_MOOD_PLAYLISTS,
  SET_RECENTLY_PLAYLISTS,
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
}

const initialState: initialStateType = {
  recentlyPlaylists: [],
  featuredPlaylists: [],
  moodPlaylists: [],
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
