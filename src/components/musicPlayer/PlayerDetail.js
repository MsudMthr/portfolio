import React from 'react';

const PlayerDetail = ({song}) => {
    console.log(song);
    return (
        <div>
            <img src={song.image_src} alt={song.title}/>
            <h1>{song.title}</h1>
            <h4>{song.artist}</h4>
        </div>
    );
};

export default PlayerDetail;