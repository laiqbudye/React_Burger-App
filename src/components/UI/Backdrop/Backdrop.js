import React from 'react';
import './Backdrop.css'

const Backdrop = (props) =>(
    props.show ? <div className='Backdrop' onClick={props.backdropclicked}></div> : null        //if modal is showing then only add backdrop layer
);

export default Backdrop;