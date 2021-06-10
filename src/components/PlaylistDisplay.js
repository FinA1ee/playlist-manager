import React from 'react';
import PlaylistItem from './PlaylistItem';

const PlaylistDisplay = (props) => {
    const { playlists } = props;
    const playlistDiv = playlists.map((list) => {
        const { snippet, contentDetails } = list;
        const { title } = snippet;
        const { itemCount } = contentDetails;
        return <PlaylistItem title={title} itemCount={itemCount}/>
    });
    return (
        <div>
            {playlistDiv}
        </div>
    )
}

export default PlaylistDisplay;