import React from 'react'
import classes from './Theme.module.css'


const ThemeButtons = props => {

    const toLightTheme = () => {
        props.setTheme('light');
        console.log('light');
    }

    const toDarkTheme = () => {
        props.setTheme('dark');
        console.log('dark');
    }

    return (
        <div className={props.theme === "light"? classes.Theme : classes.BlackTheme}>
            <div className={classes.ThemeButton1} onClick={toLightTheme}>Light</div>
            <div className={classes.ThemeButton2} onClick={toDarkTheme}>Dark</div>
        </div>
    )
}

export default ThemeButtons;