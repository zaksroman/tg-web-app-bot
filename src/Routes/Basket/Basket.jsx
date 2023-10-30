import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import BasketList from "../../Components/BasketItems/BasketList/BasketList";
import {useTelegram} from "../../Components/hooks/useTelegram";
import {useSelector} from "react-redux";
import Carousel from "../../Components/BasketItems/Carousel/Carousel";


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

    if (addedItems.length === 0) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
        tg.MainButton.setParams({
            text: 'Оформить заказ'
        })
    }

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', handleClick)
        return () => {
            tg.offEvent('mainButtonClicked', handleClick)
        }
    }, [handleClick])

    const totalPrice = addedItems.reduce((acc, item) => {
        return acc += item.price * item.count
    }, 0)

    return (
        <div>
            {/*<button onClick={handleClickBack}>BACK</button>*/}
            <h1>Basket</h1>
            <div>
                <BasketList/>
            </div>
            <div>
                <Carousel/>
            </div>
            <div>
                <h2>{!totalPrice ? 'В корзине пусто' : `Стоимость заказа ${totalPrice}` }</h2>
            </div>
        </div>
    );
};

export default Basket;