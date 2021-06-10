import React from 'react';

const PlaylistItem = (props) => {
    const { title, itemCount } = props; 
    return (
        <section>
            <p> The playlist <strong>{title}</strong> has <strong>{itemCount}</strong> items. </p>
        </section>
    )
}

export default PlaylistItem