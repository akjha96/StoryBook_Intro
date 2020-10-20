import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const Header = ({title}) => {
    return (
        <div className='header'>
        <div className='header__left'>
            <img src="https://akjha96.github.io/ReactifolioBs4_Akj/static/media/logow.d13a07af.webp" alt="logo"/>
            </div>
    {title && <h2>{title}</h2>}
            <div className='header__right'>
            <Button variant="contained" color="primary">Log In</Button>
            <Button variant="contained" color="primary">Sign up</Button>
            </div>
            <div className='header__right--mobile'>
                <IconButton variant="contained" color="primary">
            <MenuIcon />
            </IconButton>
            </div>
        </div>
    )
}

export default Header
