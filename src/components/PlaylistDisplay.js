import React, { useEffect, useState } from "react";
import Playlist from "./Playlist";
import { fetchPlaylistItems } from "../service/youtubeApiService";
import PlaylistItem from "./PlaylistItem";

const PlaylistDisplay = (props) => {
  const [playlistItems, setPlaylistItems] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const { playlistID, isClientLoaded } = props;
  const handleFetchPlaylistItem = (id) => {
    console.log("reading...");
    fetchPlaylistItems(id, null).then((res) => {
      //   console.log(res.result.items)
      setPlaylistItems(res.result.items);
    });
  };

  // const handleFetchPlaylistItem = (id, pageToken) => {
  //   fetchPlaylistItems(id, pageToken).then(
  //     function (response) {
  //       console.log(response.result);
  //       setPlaylistItems([...playlistItems, ...response.result.items]);
  //       // setResJsonLst({...resJsonLst, ...response.result})
  //       if (response.result.nextPageToken) {
  //         console.log("Retrieveing Next Page")
  //         setNextPageToken(response.result.nextPageToken);
  //       }
  //     },
  //     function (err) {
  //       console.error("Execute error", err);
  //     }
  //   );
  // };

  useEffect(() => {
    if (isClientLoaded && playlistID) {
      console.log("Reload Playlist");
      setPlaylistItems([]); // clear previous result
      // handleFetchPlaylistItem(playlistID, nextPageToken);
      handleFetchPlaylistItem(playlistID);
    }
  }, [isClientLoaded, playlistID]);

  // useEffect(() => {
  //   if ( playlistID ) {
  //     console.log("reading...");
  //     fetchPlaylistItems(playlistID).then((res) => {
  //       //   console.log(res.result.items)
  //         setPlaylistItems(res.result.items);
  //     });
  //   }
  // }, [playlistID])

  const playlistItemsDiv = playlistItems.map((item) => {
    return <PlaylistItem jsonData={item} />;
  });

  return <div>{playlistItemsDiv}</div>;
};

export default PlaylistDisplay;
