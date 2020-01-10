import React from 'react';
import './Logo.css';
import logo from '../../../src/assets/images/burger-logo.png'

const Logo = () => (
    <div className='Logo'>
        <img src={logo} alt='burger logo'></img>
    </div>
);

export default Logo;
