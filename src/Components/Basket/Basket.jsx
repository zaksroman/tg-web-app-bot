import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import BasketList from "./BasketList/BasketList";
import {useTelegram} from "../hooks/useTelegram";


const Basket = () => {
    const {tg} = useTelegram()

    const navigate = useNavigate()
    const handleClickBack = () => {
        navigate('/');
    }
    const handleClick = () => {
        navigate('/personaldata')
    }

    useEffect(() =>{
        tg.BackButton.show().onClick(handleClickBack)
        tg.MainButton.show().setParams({
            text: 'Оформить заказ'
        })
    })

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', handleClick)
        return () => {
            tg.offEvent('mainButtonClicked', handleClick)
        }
    }, [handleClick])

    return (
        <div>
            {/*<button onClick={handleClickBack}>BACK</button>*/}
            <h1>Basket</h1>
            <div>
                <BasketList/>
            </div>
        </div>
    );
};

export default Basket;