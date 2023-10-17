import React from 'react';
import {useNavigate} from "react-router-dom";

const Basket = () => {

    const navigate = useNavigate()
    const handleClick = (event) => {
        navigate('/');
    }
    return (
        <div>
            <h1>Basket</h1>
            <button onClick={handleClick}>BACK</button>

        </div>
    );
};

export default Basket;