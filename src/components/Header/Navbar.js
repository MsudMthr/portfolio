import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between py-3 px-4'>
            <div className='flex gap-4'>
                <a href='#projects' className='text-gray-500 font-medium hover:text-gray-900'>Projects</a>
                <a href='/contact' className='text-gray-500 font-medium hover:text-gray-900'>contact</a>
            </div>
            <div>
                dark
            </div>
        </div>
    );
};

export default Navbar;