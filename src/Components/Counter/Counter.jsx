import React from 'react';
import styles from './Counter.module.css'
import {useDispatch} from "react-redux";
import clsx from "clsx";

const Counter = (props) => {

    const dispatch = useDispatch()

    const {type} = props
    const StylesCount = clsx({
        [styles.bigproductitembtn]: type === 'bigproductitem',
        [styles.basketitembtn]: type === 'basketitem',
    })

    const onIncrease = (e) => {
        dispatch({ type: 'INCREASE_ITEM', payload: props.id })
    }

    const onDecrease = (e) => {
        dispatch({ type: 'DECREASE_ITEM', payload: props.id })
    }

    return (
        <div className={StylesCount} onClick={(e)=> {e.stopPropagation()}}>
            <div className={styles.buttoncontainer}>
                <button
                    onClick={onDecrease}
                    disabled={type === 'basketitem' ? props.count === 1 : false}
                    className={`${styles.btn} ${StylesCount}`}>
                    <b>-</b>
                </button>
                <h3 className={styles.number}>{props.count}
                </h3>
                <button
                    onClick={onIncrease} className={`${styles.btn} ${StylesCount}`}><b>+</b></button>
            </div>
        </div>
    );
};

export default Counter;