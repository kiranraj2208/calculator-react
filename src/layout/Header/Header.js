import React from 'react'
import ThemeButtons from '../../components/Theme/Theme'
import classes from './Header.module.css'

const Header = props => {
    return (
        <div className={props.theme === 'light' ? classes.Header : classes.DarkHeader}>
            <ThemeButtons theme={props.theme} setTheme={props.setTheme}></ThemeButtons>
        </div>
    )
}

export default Header;