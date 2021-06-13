import React from "react";
import Image from "./Image";

const PlaylistItem = (props) => {
  const { jsonData } = props;
  const thumbnail = jsonData.snippet.thumbnails.high;
  const thumbnailURL = thumbnail ? thumbnail.url : null;
  const title = jsonData.snippet.title;

  return (
    <div className="card mb-2">
      <div className="card-img-container position-relative ">
        <a>
          <Image className={"card-img-top sl_lazyimg"} imgSrc={thumbnailURL} alt="thumbnail"/>
        </a>
      </div>
      <h5>{title}</h5>
    </div>
  );
};

export default PlaylistItem;
