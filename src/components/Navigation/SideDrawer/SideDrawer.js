import React from 'react';
import './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

const SideDrawer = () => {
    return(
    <div className='SideDrawer'>
        <div className='Logo_2'><Logo/></div>
        <nav>
            <NavigationItems/>
        </nav>
    </div>
    )
};

export default SideDrawer;