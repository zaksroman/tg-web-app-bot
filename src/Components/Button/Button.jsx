import React from 'react';
import styles from './Button.module.css'
import clsx from "clsx";

const Button = (props) => {

    const {type} = props

    const ButtonStyles = clsx({
        [styles.bigproductitembtn]: true /*type === 'bigproductitem'*/,
        [styles.carouselitembtn]: type === 'carouselitem',
    })

    return (
        <button {...props} className={ButtonStyles}/>
    );
};

export default Button;