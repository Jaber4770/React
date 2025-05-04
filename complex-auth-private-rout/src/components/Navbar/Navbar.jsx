import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css'
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {

    const { user, SignOut } = use(AuthContext);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
        <li><NavLink to="/post">Post</NavLink></li>
        {
            user && <>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </>
        }
    </>


    const handleSignOut = () => {
        SignOut()
            .then(() => {
                console.log('sign out successfull')
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>{user.email}<Link onClick={handleSignOut} to='/login' className="btn">Sign Out</Link> </> :
                        <Link to='/login' className="btn">Sign in</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;