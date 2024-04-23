import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import NavBar from '../Shared/NavBar/NavBar';




const AsideNav = () => {

    return (
        <>
          <NavBar></NavBar>
        <div className='grid grid-cols-12'>
            <Sidebar></Sidebar>
           <div className='col-span-10 h-[200vh]'> <Outlet></Outlet></div>

            </div>
            </>
    );
};

export default AsideNav;

