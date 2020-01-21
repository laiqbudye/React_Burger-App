import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';

class ContactData extends Component{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            zip_code:''
        }
    }

    render(){
        return(
            <div className='ContactData'> 
                <h3>Enter Details</h3>
                <form>
                    <input type='text' className= 'Input' name='name' placeholder="Your Name"/>
                    <input type='email' className= 'Input' name='name' placeholder="Your Email"/>
                    <input type='text' className= 'Input' name='name' placeholder="Street"/>
                    <input type='text' className= 'Input' name='name' placeholder="Zip Code"/>
                    <Button btnType='Success'>ORDER</Button>
                </form>
            </div>
        );

    }
}

export default ContactData;