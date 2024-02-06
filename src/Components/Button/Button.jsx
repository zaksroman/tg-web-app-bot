import React from 'react';
import styles from './Button.module.css'
import clsx from "clsx";

const Button = (props) => {

    const {type} = props

    const ButtonStyles = clsx({
        [styles.bigproductitembtn]: type === 'bigproductitem',
        [styles.carouselitembtn]: type === 'carouselitem',
        [styles.productitemitembtn]: type === 'productItem',
    })

    return (
        <button {...props} className={ButtonStyles}/>
    );
};

export default Button;