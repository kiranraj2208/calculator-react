import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import Calculator from '../Calculator/Calculator'

const MainLayout = props => {

    const [theme, setTheme] = useState('light');
    const [firstValue, setFirstValue] = useState(0);
    const [lastSign, setLastSign] = useState('+')
    const [sign, setSign] = useState('+');
    const [displayValue, setDisplayValue] = useState(0);
    const [scientific, setScientific] = useState(false);

    useEffect(() => {
        updateDisplay();
    }, [sign])

    const updateDisplay = () => {
        console.log(firstValue, displayValue, lastSign, sign);
        let answer = 0;
        if (lastSign === '+') answer = firstValue + displayValue;
        if (lastSign === '-') answer = firstValue - displayValue;
        if (lastSign === '*') answer = firstValue * displayValue;
        if (lastSign === '/') answer = firstValue / displayValue;
        
        setFirstValue(answer);
        setLastSign(sign);
        setDisplayValue(0);
        console.log(answer);
    }
    if (theme === 'dark'){
        document.body.style = "background-color: #000";
    }
    else {
        document.body.style = "background-color: #fff";
    }


    return (
        <div> 
            <Header theme={theme} setTheme={setTheme}></Header>
            <Calculator displayValue={displayValue}
            firstValue={firstValue}
            setDisplayValue={setDisplayValue}
            sign={sign}
            setSign={setSign}
            setLastSign={setLastSign}
            lastSign={lastSign}
            setFirstValue={setFirstValue}
            scientific={scientific}
            setScientific={setScientific}
            theme={theme}
            updateDisplay={updateDisplay}></Calculator>
        </div>
    )
}

export default MainLayout;