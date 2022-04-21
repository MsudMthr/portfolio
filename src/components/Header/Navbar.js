import React from 'react';
import Theme from '../theme';

const Navbar = () => {
    return (
        <div className='flex justify-between py-6 px-10 z-30'>
            <div className='flex gap-4'>
                <a href='#projects' className='text-gray-500 font-medium hover:text-gray-900'>Projects</a>
                <a href='#contact' className='text-gray-500 font-medium hover:text-gray-900'>contact</a>
            </div>
            <div>
                <Theme />
            </div>
        </div>
    );
};

export default Navbar;