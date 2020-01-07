import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    { label: 'Chicken', type: 'chicken' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Salad', type: 'salad' }
];



const BuildControls = (props) => (
    <div className='BuildControls'>
        <p>Current price is: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl =>
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => { props.ingredientadded(ctrl.type) }}     // passing type of food to addingredient
                removed={() => { props.ingredientremoved(ctrl.type) }}
                disabled={props.disabled[ctrl.type]} />
        )}
            <button className='OrderButton' disabled={!props.purchasable}>Order Now</button>
    </div>
);

export default BuildControls;