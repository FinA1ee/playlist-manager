import React, { useEffect, useState } from "react";
import { fetchPlaylistItems } from "../service/youtubeApiService";
import PlaylistItem from "./PlaylistItem";
import PageControls from "./PageControls";
import Loading from "./Loading";

const PlaylistDisplay = (props) => {
  const [playlistItems, setPlaylistItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasLoaded, setHasLoaded] = useState(false);

  const [nextPageToken, setNextPageToken] = useState(null);
  const [prevPageToken, setPrevPageToken] = useState(null);
  const { playlist } = props;

  const playlistItemsDiv = playlistItems.map((item, index) => {
    return <PlaylistItem key={index} jsonData={item} />;
  });

  let totalResults = 0;
  let resultsPerPage = 0;

  const handleFetchPlaylistItem = (id, pageToken, isForward) => {
    console.log("reading...");
    fetchPlaylistItems(id, pageToken, 20).then((res) => {
      console.log(res.result);
      totalResults = res.result.pageInfo.totalResults;
      resultsPerPage = res.result.pageInfo.resultsPerPage;

      setNextPageToken(res.result.nextPageToken);
      setPrevPageToken(res.result.prevPageToken);
      setPageCount(Math.floor(totalResults / resultsPerPage) + 1);
      setPlaylistItems(res.result.items);
      if (pageToken) {
        if (isForward) {
          setCurrentPage(currentPage + 1 <= pageCount ? currentPage + 1 : 1);
        } else {
          setCurrentPage(currentPage - 1 >= 1 ? currentPage - 1 : 1);
        }
      }
      setHasLoaded(true);
    });
  };

  useEffect(() => {
    handleFetchPlaylistItem(playlist.value, null);
    setCurrentPage(1);
    setHasLoaded(false);
  }, [playlist]);

  const onNextPage = () => {
    if (currentPage !== pageCount) {
      setHasLoaded(false);
      handleFetchPlaylistItem(playlist.value, nextPageToken, true);
    } else {
      alert("已在最后一页");
    }
  };

  const onPrevPage = () => {
    if (currentPage !== 1) {
      setHasLoaded(false);
      handleFetchPlaylistItem(playlist.value, prevPageToken, false);
    } else {
      alert("已在首页");
    }
  };

  return hasLoaded ? (
    <div>
      <div className="row row-cols-2 row-cols-lg-4 post-list mt-5">
        {playlistItemsDiv}
      </div>
      {pageCount > 1 ? (
        <PageControls
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
          pageCount={pageCount}
          currentPage={currentPage}
        />
      ) : null}
    </div>
  ) : (
    <div className="mt-5">
      <Loading />
    </div>
  );
};

export default PlaylistDisplay;
