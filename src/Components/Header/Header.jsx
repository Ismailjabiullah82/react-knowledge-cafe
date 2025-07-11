import React from 'react';
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='max-w-7xl mx-auto md:flex justify-between items-center mb-4'>
            <h3 className='text-4xl font-bold border-b-2'> Knowledge Cafe</h3>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;