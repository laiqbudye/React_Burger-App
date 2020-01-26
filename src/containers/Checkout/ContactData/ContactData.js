import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from "../../../components/UI/Spinner/Spinner";
import './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            zip_code:''
        },
        loading: false
    }

    orderHandler = (event) =>{
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients : this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Laiq'
            }
        }

       axios.post('/orders.json', order)
       .then(response => {
            this.setState({loading: false});
            this.props.history.push('/');
            console.log(response)
       })
       .catch(err => {
            this.setState({loading: false});
            console.log(err);
       });
    }

    render(){
        let form = (
            <form>
                <input type='text' className= 'Input' name='name' placeholder="Your Name"/>
                <input type='email' className= 'Input' name='name' placeholder="Your Email"/>
                <input type='text' className= 'Input' name='name' placeholder="Street"/>
                <input type='text' className= 'Input' name='name' placeholder="Zip Code"/>
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        )

        if(this.state.loading){
            form = <Spinner/>
        }
        return( 
            <div className='ContactData'> 
                <h3>Enter Details</h3>
                {form}
            </div>
        );

    }
}

export default ContactData;