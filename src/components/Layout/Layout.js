import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';

const layout = (props) => (
    <Auxiliary>
        <Toolbar/>
        <main className ='mainarea'>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;