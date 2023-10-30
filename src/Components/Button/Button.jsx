import React from 'react';
import styles from './Button.modules.css'
import clsx from "clsx";
const Button = (props) => {

    const {type} = props
    const ButtonStyles = clsx({
        [styles.bigproductitembtn]: type === 'bigproductitem',
    })

    return (
        <button {...props} className={ButtonStyles}/>
    );
};

export default Button;