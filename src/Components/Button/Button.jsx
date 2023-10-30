import React from 'react';
import styles from './Button.modules.css'
import clsx from "clsx";
const Button = (props) => {

    const {type} = props
    const buttonStyles = clsx({
        [styles.buttonStyles]: true,
        [styles.basketitem]: type === 'basketitem',
        [styles.carouselitem]: type === 'carouselitem'
    })

    return (
        <button {...props} className={buttonStyles}/>
    );
};

export default Button;