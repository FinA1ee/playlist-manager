import React from "react";
import Image from "./Image";
import DeletedIcon from "../static/img/delete-icon.png";

const PlaylistItem = (props) => {
  const { jsonData } = props;
  const thumbnail = jsonData.snippet.thumbnails.high;
  const thumbnailURL = thumbnail ? thumbnail.url : null;
  const title = thumbnail ? jsonData.snippet.title : "This video has been deleted by Youtube.";
  const href = "https://www.youtube.com/watch?v=" + (jsonData.contentDetails ? jsonData.contentDetails.videoId : "");

  return (
    <div className="card mb-2">
      <div className="card-img-container position-relative">
        <a href={href} target="_blank">
          <Image className={"card-img-top sl_lazyimg"} imgSrc={thumbnailURL ? thumbnailURL : DeletedIcon} alt="thumbnail"/>
        </a>
      </div>
      <h5>{title}</h5>
    </div>
  );
};

export default PlaylistItem;
