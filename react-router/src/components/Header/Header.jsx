import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div className='flex items-center justify-center border-1 gap-3 p-5'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/users'>Users</NavLink>
        </div>
    );
};

export default Header;