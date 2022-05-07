import React from 'react';

const Work = ({data}) => {
    return (
        <div>
            <img  src={data.image} alt={data.name} className="h-20 rounded-md z-10" />
            <h4 className="absolute   text-xs font-semibold z-1">{data.name}</h4>
        </div>
    );
};

export default Work;