import React from 'react';
import {useNavigate} from "react-router-dom";

const BigProoductItem = () => {
    const navigate = useNavigate()
    const handleClick = (event) => {
        navigate('/');
    }
    return (
        <div>
            <button onClick={handleClick}>BACK</button>
            <h1>TEST</h1>
        </div>
    );
};

export default BigProoductItem;