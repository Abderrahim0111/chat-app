import React from 'react';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';

const MainContainer = () => {
    return (
        <div className='main-container'>
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default MainContainer;
