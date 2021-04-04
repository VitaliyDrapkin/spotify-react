export interface playlistsResponse {
  playlists: playlist[];
}

export interface playlist {
  description: string;
  image_url: string;
  name: string;
  playlist_id: number;
}
