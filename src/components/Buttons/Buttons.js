import React from 'react'
import Button from '../Button/Button';
import classes from './Buttons.module.css';

const Buttons = props => {
    const values = ['1', '2', '3', '+',
                    '4', '5', '6', '-',
                    '7', '8', '9', '*',
                    'clear', '0', '=', '/']
    
    const scientificButtons = ['sign', 'square', 'root'];
    const buttonOnClick = (event) => {
        alert(event.target.value);
        console.log(event);
        // props.displayValue += event.target.value;
    }

    const row1 = values.slice(0, 4).map( (val, index) => {
        return (
        <Button onClick={buttonOnClick} 
        setDisplayValue={props.setDisplayValue}
        displayValue={props.displayValue}
        sign={props.sign}
        setSign={props.setSign}
        updateDisplay={props.updateDisplay}
        lastSign={props.lastSign}
        theme={props.theme}
        value={val} key={index} ></Button>)
    })
    
    const row2 = values.slice(4, 8).map( (val, index) => {
        return <Button onClick={buttonOnClick} 
        displayValue={props.displayValue}
        setDisplayValue={props.setDisplayValue}
        sign={props.sign} 
        setSign={props.setSign}
        updateDisplay={props.updateDisplay}
        lastSign={props.lastSign}
        theme={props.theme}
        value={val} key={index} ></Button>
    })
    
    const row3 = values.slice(8, 12).map( (val, index) => {
        return <Button onClick={buttonOnClick} 
        setDisplayValue={props.setDisplayValue}
        displayValue={props.displayValue}
        sign={props.sign}
        setSign={props.setSign} 
        updateDisplay={props.updateDisplay}
        lastSign={props.lastSign}
        theme={props.theme}
        value={val} key={index} ></Button>
    })

    const row4 = values.slice(12, 16).map( (val, index) => {
        return <Button onClick={buttonOnClick} 
        setDisplayValue={props.setDisplayValue}
        displayValue={props.displayValue}
        sign={props.sign}
        setSign={props.setSign} 
        updateDisplay={props.updateDisplay}
        lastSign={props.lastSign}
        setFirstValue={props.setFirstValue}
        theme={props.theme}
        setLastSign={props.setLastSign}
        value={val} key={index} ></Button>
    })

    const row5 = scientificButtons.map( (val, index) => {
        return <Button value={val} key={index} 
        setDisplayValue={props.setDisplayValue}
        theme={props.theme}
        displayValue={props.displayValue}
        sign={props.sign}
        setSign={props.setSign} 
        firstValue={props.firstValue}
        updateDisplay={props.updateDisplay}
        lastSign={props.lastSign}
        setFirstValue={props.setFirstValue}
        ></Button>
    })
    return (
        <div>
            <div className={classes.Rows}>{row1}</div>
            <div className={classes.Rows}>{row2}</div>
            <div className={classes.Rows}>{row3}</div>
            <div className={classes.Rows}>{row4}</div>
            <div className={props.scientific? classes.Rows : classes.None}>{row5}</div>   
        </div>
    )
}
export default Buttons;