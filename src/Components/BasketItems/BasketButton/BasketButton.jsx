import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from './BasketButton.module.css'

const BasketButton = () => {
    const navigate = useNavigate()
    const products = useSelector(state => state.products);

    const handleClick = () => {
        navigate('/basket');
    }

    const totalPrice = products.reduce((acc, item) => {
        return acc += item.price * item.count
    }, 0)

    return (
        <button onClick={handleClick} className={styles.basketButton}>{totalPrice} ₽</button>

    );
};

export default BasketButton;