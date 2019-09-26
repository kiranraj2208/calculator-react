import React from 'react'
import ScientificButton from '../../components/ScientificButton/ScientificButton'
import Display from '../../components/Display/Display'
import Buttons from '../../components/Buttons/Buttons';
import classes from './Calculator.module.css';

const Calculator = props => {

    return (
        <div className={classes.Calculator}>
            <ScientificButton
            scientific={props.scientific}
            theme={props.theme}
            setScientific={props.setScientific}
            ></ScientificButton>


            <Display displayValue={props.displayValue}
            firstValue={props.firstValue}
            theme={props.theme}
            ></Display>

            <Buttons displayValue={props.displayValue}
            setDisplayValue={props.setDisplayValue}
            sign={props.sign}
            setSign={props.setSign}
            lastSign={props.lastSign}
            setLastSign={props.setLastSign}
            theme={props.theme}
            firstValue={props.firstValue}
            updateDisplay={props.updateDisplay}
            setFirstValue={props.setFirstValue}
            scientific={props.scientific}
            ></Buttons>
      </div>
    )
}

export default Calculator;