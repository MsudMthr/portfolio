import React from 'react';

import rockGif from '../../asset/video/rockpaperscissors.gif'

const RockScissorsPaper = () => {
    return (
        <div className='h-screen center bg-[#c85260]'>
            <div>
                <img src={rockGif} alt="rockpaperscissors" className='h-screen'/>
            </div>
            <div className='center absolute h-screen w-screen backdrop-blur-md '>
                <div className=''>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default RockScissorsPaper;