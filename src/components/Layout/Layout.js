import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Auxiliary>
        <Toolbar/>
        <SideDrawer/>
        <main className ='mainarea'>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;