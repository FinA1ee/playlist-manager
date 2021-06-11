import React, { useEffect, useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";

const Playlist = (props) => {
  const { playlistID, title, itemCount, fetchPlaylistItems } = props;
  const [playlistItemData, setPlaylistItemData] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [expand, setExpand] = useState(false);
  const [resJsonLst, setResJsonLst] = useState({});

  const handleFetchPlaylistItem = (id, pageToken) => {
    fetchPlaylistItems(id, pageToken).then(
      function (response) {
        console.log(response.result);
        setPlaylistItemData([...playlistItemData, ...response.result.items]);
        // setResJsonLst({...resJsonLst, ...response.result})
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

  const generateCSVData = () => {
    const result = playlistItemData.map((item) => {
        return {title: item.snippet.title};
    })
    console.log("result: ")
    return result;
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
        <CSVLink data={generateCSVData()}>Export CSV</CSVLink>
      </div>
      
      { expand ? <div>{playlistItem}</div> : null }
    </section>
  );
};

export default Playlist;
