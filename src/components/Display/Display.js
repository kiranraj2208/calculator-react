import React from 'react'
import classes from './Display.module.css'

const Display = props => {
    let displayNumber = props.displayValue;
    if (props.displayValue === 0){
        displayNumber = props.firstValue;
    }
    return (
        <div className={props.theme === 'light' ? classes.Display : classes.DarkDisplay}>
            {displayNumber}
        </div>
    )
}

export default Display;