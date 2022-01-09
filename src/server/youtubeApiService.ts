/*
 * @file: file description
 * @author: your name
 * @Date: 2021-10-21 17:14:56
 * @LastEditors: your name
 * @LastEditTime: 2022-01-09 14:15:46
 */
import { gapi } from "gapi-script";

/* global gapi */
const fetchPlaylists = () => {
  return gapi.client.youtube.playlists.list({
    part: ["snippet,contentDetails"],
    maxResults: 25,
    mine: true,
  })
};

const fetchPlaylistItems = (id: any, nextPageToken: any, maxResults: number) => {
  if (nextPageToken) {
    return gapi.client.youtube.playlistItems.list({
      part: ["snippet,contentDetails"],
      maxResults: maxResults,
      playlistId: id,
      pageToken: nextPageToken
    });
  } else {
    return gapi.client.youtube.playlistItems.list({
      part: ["snippet,contentDetails"],
      maxResults: maxResults,
      playlistId: id,
    });
  }
};

export { fetchPlaylists, fetchPlaylistItems };
