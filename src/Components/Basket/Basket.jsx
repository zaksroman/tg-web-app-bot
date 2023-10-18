import React from 'react';
import {useNavigate} from "react-router-dom";
import BasketList from "./BasketList/BasketList";


const Basket = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/');
    }

    return (
        <div>
            <button onClick={handleClick}>BACK</button>
            <h1>Basket</h1>
            <div>
                <BasketList/>
            </div>
        </div>
    );
};

export default Basket;