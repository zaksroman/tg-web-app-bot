import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import BasketList from "./BasketList/BasketList";
import {useTelegram} from "../hooks/useTelegram";


const Basket = () => {
    const {tg} = useTelegram()

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/');
    }

    useEffect(() =>{
        tg.BackButton.show().onClick(handleClick)
    })

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