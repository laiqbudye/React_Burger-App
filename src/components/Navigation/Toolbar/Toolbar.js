import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';


const Toolbar = () => (
    <header className='Toolbar'>
        <div>Menu</div>

        <div className='Logo_1'><Logo /></div>

        <nav className='DesktopOnly'>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);

export default Toolbar;