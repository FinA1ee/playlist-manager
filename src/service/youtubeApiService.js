/* global gapi */
const fetchPlaylists = () => {
    return gapi.client.youtube.playlists
      .list({
        part: ["snippet,contentDetails"],
        maxResults: 25,
        mine: true,
      })
  };

export { fetchPlaylists }