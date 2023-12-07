import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from './BasketButton.module.css'

const BasketButton = () => {
    const navigate = useNavigate()
    const addedItems = useSelector(state => state.addedItems);

    const handleClick = () => {
        navigate('/basket');
    }

    const totalPrice = addedItems.reduce((acc, item) => {
        return acc += item.price * item.count
    }, 0)

    return (
        <div className={styles.basketButton}>
            <button onClick={handleClick}>{totalPrice} ₽</button>
        </div>
    );
};

export default BasketButton;