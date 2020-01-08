import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Button from '../../components/UI/Button/Button';   //this is my button component and not of HTML

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igkey => {
        return <li key='igkey'>
            <span style={{ textTransform: 'capitalize' }}>{igkey}</span>: {props.ingredients[igkey]}
        </li>
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchasecanceled}>CANCLE</Button>
            <Button btnType='Success' clicked={props.purchasecontinued}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;