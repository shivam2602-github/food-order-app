import React from 'react'

import classes from './Header.module.css'
import foodImage from '../../assets/foodImage.jpg'
import HeaderCartButton from './HeaderCartButton'


const Header =(props) => {
    return(
        <>
        <header className={classes.header}>
            <h1>Food Meals </h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>

        <div className={ classes['main-image']}>
            <img src={foodImage} alt=' A table full of delicious food'/>
        </div>
        </>
    );
}

export default Header;