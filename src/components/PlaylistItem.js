import React from 'react';

const PlaylistItem = (props) => {

    const { jsonData } = props;
    const thumbnail = jsonData.snippet.thumbnails.default;
    const thumbnailURL = thumbnail ? thumbnail.url : null;
    const title = jsonData.snippet.title;

    return (
        <section>
            <h5>{title}</h5>
            <img src={thumbnailURL} alt="thumbnail" />
        </section>
    )
}

export default PlaylistItem;