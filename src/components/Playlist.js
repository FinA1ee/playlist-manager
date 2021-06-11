import React, { useEffect, useState } from "react";

const Playlist = (props) => {
  const { playlistID, title, itemCount, fetchPlaylistItems } = props;
  const [playlistItemData, setPlaylistItemData] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [expand, setExpand] = useState(false);

  const handleFetchPlaylistItem = (id, pageToken) => {
    fetchPlaylistItems(id, pageToken).then(
      function (response) {
        console.log(response.result.items);
        setPlaylistItemData([...playlistItemData, ...response.result.items]);
        if (response.result.nextPageToken) {
        //   console.log("Retrieveing Next Page")
          setNextPageToken(response.result.nextPageToken);
        }
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
  };

  const expandPlaylistItem = () => {
      setExpand(!expand);
  }

  const exportCSV = () => {
      
  }


  useEffect(() => {
    handleFetchPlaylistItem(playlistID, nextPageToken);
  }, [nextPageToken]);

  const playlistItem = playlistItemData.map((item, index) => {
    const thumbnail = item.snippet.thumbnails.default;
    const thumbnailURL = thumbnail ? thumbnail.url : null;
    return (
        <section>
            <h5>{index + 1} : {item.snippet.title}</h5>
            <img src={thumbnailURL} alt="thumbnail" />
        </section>
    );
  });

  return (
    <section>
      <p>
        {" "}
        The playlist <strong>{title}</strong> has <strong>{itemCount}</strong>{" "}
        items.{" "}
      </p>
      {/* <button onClick={handleFetchPlaylistItem}>Display Items.</button> */}
      <div> 
        <button onClick={expandPlaylistItem}>Expand / Collapse</button>
        <button onClick={exportCSV}>Export CSV</button>
      </div>
      
      { expand ? <div>{playlistItem}</div> : null }
    </section>
  );
};

export default Playlist;
