import React from 'react';
import './FormInput.css';

const FormInput = (props) => {
    let inputElement = null;

    let inputClasses = ['InputElement'];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid');
        inputClasses = inputClasses.join(' ');
    }

    switch(props.inputtype){
        case 'input':
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case 'textarea':
            inputElement = <textarea
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case 'select':    //created method for drop-downs.... for future use
            inputElement = (
                <select
                    className={inputClasses}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return(
        <div className='Input'>
           <label className='Label'>{props.label}</label>
            {inputElement}
        </div>
        
    )
}

export default FormInput;