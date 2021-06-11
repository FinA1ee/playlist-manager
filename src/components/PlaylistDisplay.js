import React from "react";
import Playlist from "./Playlist";
import { fetchPlaylistItems } from "../service/youtubeApiService";



const PlaylistDisplay = (props) => {
  const { playlists } = props;
  const playlistDiv = playlists.map((list) => {
    const { id, snippet, contentDetails } = list;
    const { title } = snippet;
    const { itemCount } = contentDetails;
    return (
      itemCount > 105 ? (
      <Playlist
        title={title}
        itemCount={itemCount}
        playlistID={id}
        fetchPlaylistItems={fetchPlaylistItems}
      /> ) : null
    );
  });
  return <div>{playlistDiv}</div>;
};

export default PlaylistDisplay;
