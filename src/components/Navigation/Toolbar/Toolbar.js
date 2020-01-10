import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';


const Toolbar = () => (
    <header className='Toolbar'> 
        <div>Menu</div>
        <Logo />
        <NavigationItems></NavigationItems>
    </header>
);

export default Toolbar;