import { X, Menu } from 'lucide-react';
import React, { useState } from 'react';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='container mx-auto flex justify-between items-center mt-5'>
            <div>
                <span onClick={()=>setOpen(!open)}>
                    {
                        open ?
                            <X className='md:hidden' /> :
                            <Menu className='md:hidden' />
                    }
                    <h1 className='text-2xl md:flex hidden'>NavBar</h1>
                </span>
                <ul className={`md:hidden bg-green-400 absolute duration-500 text-black p-2 rounded-lg ${open ? 'left-2' : '-left-20'}`}>
                    <li>Home</li>
                    <li>About</li>
                    <li>contact</li>
                </ul>
            </div>
            <div>
                <ul className='md:flex gap-10 hidden'>
                    <li>Home</li>
                    <li>About</li>
                    <li>contact</li>
                </ul>
            </div>
            <div>
                <button className='btn'>Sign in</button>
            </div>
        </div>
    );
};

export default NavBar;