import React from 'react';
import styles from './Button.modules.css'
import clsx from "clsx";
const Button = (props) => {

    const {type} = props
    const buttonStyles = clsx({
        [styles.bigproductitembtn]: type === 'bigproductitem',
    })

    return (
        <button className={buttonStyles}/>
    );
};

export default Button;