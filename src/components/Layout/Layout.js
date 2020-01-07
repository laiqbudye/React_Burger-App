import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Layout.css';

const layout = (props) => (
    <Auxiliary>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className ='mainarea'>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;