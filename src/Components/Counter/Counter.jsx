import React from 'react';
import styles from './Counter.module.css'
import {useDispatch} from "react-redux";
import clsx from "clsx";
import {useNavigate} from "react-router-dom";
import button from "../Button/Button";

const Counter = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/basket');
    }

    const {type} = props
    const StylesCount = clsx({
        [styles.bigproductitembtn]: type === 'bigproductitem',
        [styles.basketitembtn]: type === 'basketitem',
        [styles.productlistitembtn]: type === 'productlistItem',
    })

    const onIncrease = () => {
        dispatch({ type: 'INCREASE_ITEM', payload: props._id })
    }

    const onDecrease = () => {
        dispatch({ type: 'DECREASE_ITEM', payload: props._id })
    }

    return (
        <div className={StylesCount} onClick={(e)=> {e.stopPropagation()}}>
            <div className={styles.containerBtn}>
                <button
                    onClick={onDecrease}
                    disabled={type === 'basketitem' ? props.count === 1 : false}
                    className={`${StylesCount} ${styles.btn}`}>
                    <b>-</b>
                </button>
                <p className={`${StylesCount} ${styles.number}`}>
                    {props.count}
                </p>
                <button
                    className={` ${StylesCount} ${styles.btn}`}
                    onClick={onIncrease}>
                    <b>+</b>
                </button>
            </div>

            <div className={styles.containerBasketButton}>
            {type==='bigproductitem'
                && props.count !== 0
                && <button
                    className={styles.basketButton}
                    onClick={handleClick}
                >Корзина</button>}
            </div>

        </div>
    );
};

export default Counter;