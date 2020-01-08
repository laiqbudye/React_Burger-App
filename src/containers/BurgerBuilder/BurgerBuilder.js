import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 5,
    chicken: 10,
    cheese: 10,
    meat: 15
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            chicken: 0,
            cheese: 0,
            meat: 0
        },
        totalprice: 10,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients){
        const sumofmeals = Object.keys(ingredients)      //['salad','chicken','cheese','meat']
        .map(igkey => ingredients[igkey])                
        .reduce((sum,el) => {
            return sum + el;                            //return sum of ingredients
        },0)

        this.setState({purchasable: sumofmeals > 0})
    }

    addIngredientHandler = (type) => {
        const oldcount = this.state.ingredients[type];
        const updatedcount = oldcount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedcount;

        const baseprice = this.state.totalprice;
        const priceaddition = INGREDIENT_PRICES[type];
        const newprice = baseprice + priceaddition;
        this.setState({ totalprice: newprice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredienthandler = (type) => {
        const oldcount = this.state.ingredients[type];

        if (oldcount <= 0) {
            return;      //fixed issue if we press less button before adding something
        }
        const updatedcount = oldcount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedcount;

        const baseprice = this.state.totalprice;
        const pricededuction = INGREDIENT_PRICES[type];
        const newprice = baseprice - pricededuction;
        this.setState({ totalprice: newprice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };

        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;

            //return object as {salad: true, meat: false, cheese: true ....}
        }
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientadded={this.addIngredientHandler}
                    ingredientremoved={this.removeIngredienthandler}
                    disabled={disabledInfo}
                    price= {this.state.totalprice} 
                    purchasable = {this.state.purchasable} 
                    ordering = {this.purchaseHandler}/>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;