import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import BasketList from "../../Components/BasketItems/BasketList/BasketList";
import {useTelegram} from "../../hooks/useTelegram";
import {useSelector} from "react-redux";
import Carousel from "../../Components/BasketItems/Carousel/Carousel";
import {findAllByDisplayValue} from "@testing-library/react";


const Basket = () => {
    const {tg} = useTelegram()
    const addedItems = useSelector(state => state.addedItems);
    const navigate = useNavigate()
    const handleClickBack = () => {
        navigate('/');
    }
    const handleClick = () => {
        navigate('/personaldata')
    }

    useEffect(() =>{
        tg.BackButton.show().onClick(handleClickBack)
        return () => {
            tg.BackButton.offClick(handleClickBack)
        }
    })

    const totalPrice = addedItems.reduce((acc, item) => {
        return acc += item.price * item.count
    }, 0)

    const totalCount = addedItems.reduce((acc, item) => {
        return acc += item.count
    }, 0)

    if (addedItems.length === 0) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
        tg.MainButton.setParams({
            text:
                `К оформлению ${totalCount} шт, ${totalPrice} ₽`
        })
    }

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', handleClick)
        return () => {
            tg.offEvent('mainButtonClicked', handleClick)
        }
    }, [handleClick])

    return (
        <div>
            <h1>Корзина</h1>
            {addedItems.length === 0 && <div>В корзине пусто</div>}
            <div>
                <BasketList/>
            </div>
            {/*<div>*/}
            {/*    <Carousel/>*/}
            {/*</div>*/}
        </div>
    );
};

export default Basket;