import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

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
        purchasing: false,
        loading: false
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


    /*for below functions we have to use arrow functions because of this keyword --. this points to class*/
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () =>{         
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () =>{
        this.setState({loading: true});
        const order = {
            ingredients : this.state.ingredients,
            totalprice : this.state.totalprice
        }

       axios.post('/orders.json', order)
       .then(response => {
            this.setState({loading: false , purchasing: false});
            console.log(response)
       })
       .catch(err => {
            this.setState({loading: false, purchasing: false});
            console.log(err);
       });
    }


    render() {
        const disabledInfo = { ...this.state.ingredients };

        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;

            //return object as {salad: true, meat: false, cheese: true ....}
        }

        let orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            purchasecanceled={this.purchaseCancelHandler}
            purchasecontinued={this.purchaseContinueHandler}
            totalprice={this.state.totalprice} />

        //if loading is true then only show spinner
        if(this.state.loading){
            orderSummary =<Spinner/>
        }
        

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalclosed = {this.purchaseCancelHandler}>
                    {orderSummary}
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