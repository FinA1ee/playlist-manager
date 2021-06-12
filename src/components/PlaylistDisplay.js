import React, { useEffect, useState } from "react";
import { fetchPlaylistItems } from "../service/youtubeApiService";
import PlaylistItem from "./PlaylistItem";
import PageControls from "./PageControls";
import Loading from "./Loading";

const PlaylistDisplay = (props) => {
  const [playlistItems, setPlaylistItems] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { playlistID } = props;

  let totalResults = 0;
  let resultsPerPage = 0;

  const handleFetchPlaylistItem = (id, nextPageToken) => {
    console.log("reading...");
    fetchPlaylistItems(id, nextPageToken).then((res) => {
      console.log(res.result);
      totalResults = res.result.pageInfo.totalResults;
      resultsPerPage = res.result.pageInfo.resultsPerPage;

      setNextPageToken(res.result.nextPageToken);
      setPageCount(Math.floor(totalResults / resultsPerPage) + 1);
      setPlaylistItems(res.result.items);
      setCurrentPage(currentPage + 1 <= pageCount ? currentPage + 1 : 1);
      setHasLoaded(true);

      console.log("Next Page Token: ", nextPageToken);
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
    if (playlistID) {
      console.log("Reload Playlist");
      setNextPageToken(null);
      setPageCount(1);
      setPlaylistItems([]); // clear previous result
      setCurrentPage(0);
      setHasLoaded(false);

      // handleFetchPlaylistItem(playlistID, nextPageToken);
      handleFetchPlaylistItem(playlistID, null);
    }
  }, [playlistID, null]);

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
    return (
      <div>
        <PlaylistItem jsonData={item} />
      </div>
    );
  });

  const onNextPage = () => {
    setHasLoaded(false);
    handleFetchPlaylistItem(playlistID, nextPageToken);
    console.log("Press Next");
  };

  // const onPrevPage = () => {};

  return hasLoaded ? (
    <div className="mt-5">
      {playlistItemsDiv}
      {pageCount > 1 ? (
        <PageControls
          onNextPage={onNextPage}
          // onPrevPage={onPrevPage}
          pageCount={pageCount}
          currentPage={currentPage}
        />
      ) : null}
    </div>
  ) : playlistID !== null ? (
    <div className="mt-5">
      <Loading />
    </div>
  ) : null;
};

export default PlaylistDisplay;
