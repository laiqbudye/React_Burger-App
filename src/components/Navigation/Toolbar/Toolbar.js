import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const Toolbar = (props) => (
    <header className='Toolbar'>
        <DrawerToggle clicked = {props.toggler}/>

        <div className='Logo_1'><Logo /></div>

        <nav className='DesktopOnly'>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);

export default Toolbar;