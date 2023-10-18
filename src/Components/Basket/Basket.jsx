import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Basket = () => {
    const addedItems = useSelector(state => state.addedItems);

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/');
    }

    return (
        <div>
            <button onClick={handleClick}>BACK</button>
            <h1>Basket</h1>
            <div>
                {addedItems}
            </div>
        </div>
    );
};

export default Basket;