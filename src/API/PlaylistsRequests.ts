import { playlistVM } from "./../models/view-models/playlist.vm";
import { playlistsResponse } from "./../models/server-models/playlist.model";
import { instance } from "./ApiSettings";

export const PlaylistsRequests = {
  getRecentlyPlayedPlaylists: async (): Promise<playlistVM[]> => {
    const response = await instance.get<playlistsResponse>(
      `recently_played_playlists?limit=10`
    );
    const playlists = response.data.playlists.map((item) => {
      return new playlistVM(
        item.playlist_id,
        item.name,
        item.description,
        item.image_url
      );
    });
    return playlists;
  },

  getFeaturedPlaylists: async (): Promise<playlistVM[]> => {
    const response = await instance.get<playlistsResponse>(
      `featured_playlists?limit=10`
    );
    const playlists = response.data.playlists.map((item) => {
      return new playlistVM(
        item.playlist_id,
        item.name,
        item.description,
        item.image_url
      );
    });
    return playlists;
  },
  getMoodPlaylists: async (): Promise<playlistVM[]> => {
    const response = await instance.get<playlistsResponse>(
      `mood_playlists?limit=10`
    );
    const playlists = response.data.playlists.map((item) => {
      return new playlistVM(
        item.playlist_id,
        item.name,
        item.description,
        item.image_url
      );
    });
    return playlists;
  },
};
