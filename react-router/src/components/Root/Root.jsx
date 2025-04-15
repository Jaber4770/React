import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';


const Root = () => {

    return (
        <div>
            <Header></Header>
            <div className='flex'>
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;