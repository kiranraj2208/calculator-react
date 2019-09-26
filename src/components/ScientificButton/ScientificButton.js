import React from 'react'
import classes from './ScientificButton.module.css'

const ScientificButton = props => {

    const toggleScientificButton = () => {
        console.log(props.scientific);
        props.setScientific(!props.scientific);
    }

    return (
        <div className={props.theme === 'light' ? classes.ScientificButton : classes.DarkScientificButton} 
        onClick={toggleScientificButton}>
            Scientific Mode
        </div>
    )
}

export default ScientificButton;