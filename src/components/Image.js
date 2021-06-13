import React, { useState } from "react";
import LoaderIcon from "../static/img/loader.png";

const Image = (props) => {
  const { className, imgSrc, alt } = props;
  const [hasLoaded, setHasLoaded] = useState(false);
  const onLoad = () => {
    setHasLoaded(true);
  };
  return (
    <img
      style={{ maxHeight: "350px" }}
      className={className}
      src={hasLoaded ? imgSrc : LoaderIcon}
      onLoad={onLoad}
      alt={alt}
    />
  );
};

export default Image;
