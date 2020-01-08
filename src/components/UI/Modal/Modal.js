import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';
import './Modal.css';

const Modal = (props) => (
    <Aux>
        <Backdrop show = {props.show} backdropclicked={props.modalclosed} />
        <div className='Modal'
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default Modal;