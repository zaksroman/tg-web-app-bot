import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import BasketList from "../../Components/BasketItems/BasketList/BasketList";
import {useTelegram} from "../../hooks/useTelegram";
import {useSelector} from "react-redux";
import styles from './Basket.module.css'

const Basket = () => {
    const {tg} = useTelegram()
    const products = useSelector(state => state.products);
    const addedItems = useSelector(state => state.addedItems);
    const navigate = useNavigate()

    const handleClickBack = () => {
        tg.MainButton.hide()
        navigate(-1);
    }

    const handleClick = () => {
        navigate('/personaldata')
    }

    useEffect(() =>{
        tg.BackButton.show().onClick(handleClickBack)
        return () => {
            tg.BackButton.offClick(handleClickBack)
        }
    },[handleClickBack])

    const totalPrice = products.reduce((acc, item) => {
        return acc += item.price * item.count
    }, 0)

    if (addedItems.length === 0) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
        tg.MainButton.setParams({
            text:
                `К оформлению ${totalPrice} ₽`,
            css: {
                padding: "0 20px"
            }
        })
    }

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', handleClick)
        return () => {
            tg.offEvent('mainButtonClicked', handleClick)
        }
    }, [handleClick])

    return (
        <div >
            <h3 className={styles.h3}>Корзина</h3>
                {addedItems.length === 0 && <div className={styles.emptybascet}>В корзине пусто</div>}
            <div>
                <BasketList/>
            </div>
        </div>
    );
};

export default Basket;