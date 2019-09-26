import React from 'react';
import classes from './Button.module.css'

const Button = props => {

    const isNumeric = (value) =>  {
        return /^-{0,1}\d+$/.test(value);
    }
    
    const onButtonClick = (event) => {
        console.log(event.currentTarget.innerHTML)
        const target = event.currentTarget.innerHTML;

        if (isNumeric(target)){
            console.log('Number', target);
            props.setDisplayValue(props.displayValue * 10 + parseInt(target));
        }
        else if(target === 'clear'){
                props.setDisplayValue(0);
                props.setSign('+');
                props.setLastSign('+');
                props.setFirstValue(0);
        }
        else if(target === 'sign'){
            if(props.displayValue === 0 && props.firstValue !== 0)
            props.setDisplayValue(props.firstValue * props.firstValue);
            else
            props.setDisplayValue(-1*props.displayValue);
        }
        else if(target === 'square'){
            if(props.displayValue === 0 && props.firstValue !== 0)
            props.setDisplayValue(props.firstValue * props.firstValue);
            else
            props.setDisplayValue(props.displayValue * props.displayValue);
        }
        else if(target === 'root'){
            if(props.displayValue === 0 && props.firstValue !== 0)
            props.setDisplayValue(props.firstValue * props.firstValue);
            else
            props.setDisplayValue(Math.sqrt(props.displayValue));
        }
        else if(target === '=') {
            props.updateDisplay();
        }
        else{
            console.log('Other', target);
            props.setSign(target);
            console.log('sign', props.sign);
            if (target === props.lastSign)
            props.updateDisplay();
        }
    }
    return (
        <div className={props.theme === 'light' ? classes.Button : classes.DarkButton} 
        onClick={onButtonClick}>
            {props.value}
        </div>
    )
}

export default Button;