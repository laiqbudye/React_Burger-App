import React from 'react';
import './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
let attachedClasses = ['SideDrawer','Close'];
// console.log("aaa " +props.open );

if(props.open){
    attachedClasses = ['SideDrawer','Open'];
}
    return (
        <Aux>
            <Backdrop
                show={props.open}
                backdropclicked={props.closed} ></Backdrop>
            <div className= {attachedClasses.join(' ')}>
                <div className='Logo_2'><Logo /></div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
};

export default SideDrawer;