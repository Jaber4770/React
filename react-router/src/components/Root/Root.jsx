import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigate, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

// const navigation = useNavigation();
// const isNavigating = Boolean(navigation.location);

const Root = () => {

    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className='flex'>
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div className='flex-1'>
                    {
                        // isNavigating && <span>Loading...</span>
                    }
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;