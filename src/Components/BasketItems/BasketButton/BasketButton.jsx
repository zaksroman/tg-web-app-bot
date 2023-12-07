import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

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
        <div>
            <button onClick={handleClick}>{totalPrice} ₽</button>
        </div>
    );
};

export default BasketButton;