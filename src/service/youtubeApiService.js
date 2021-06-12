/* global gapi */
const fetchPlaylists = () => {
  return gapi.client.youtube.playlists.list({
    part: ["snippet,contentDetails"],
    maxResults: 25,
    mine: true,
  })
};

const fetchPlaylistItems = (id, nextPageToken) => {
  if (nextPageToken) {
    return gapi.client.youtube.playlistItems.list({
      part: ["snippet,contentDetails"],
      maxResults: 20,
      playlistId: id,
      pageToken: nextPageToken
    });
  } else {
    return gapi.client.youtube.playlistItems.list({
      part: ["snippet,contentDetails"],
      maxResults: 50,
      playlistId: id,
    });
  }
};

export { fetchPlaylists, fetchPlaylistItems };
