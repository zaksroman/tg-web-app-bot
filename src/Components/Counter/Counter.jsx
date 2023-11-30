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
        e.stopPropagation()
        dispatch({ type: 'INCREASE_ITEM', payload: props.id })
    }

    const onDecrease = (e) => {
        e.stopPropagation()
        dispatch({ type: 'DECREASE_ITEM', payload: props.id })
        if (props.count === 1) {
        }
    }

    return (
        <div className={StylesCount}>
            <div className={styles.buttoncontainer}>
                <button onClick={onDecrease} disabled={props.count === 1} className={`${styles.btn} ${StylesCount}`}><b>-</b></button>
                <h3 className={styles.number}>{props.count}</h3>
                <button onClick={onIncrease} className={`${styles.btn} ${StylesCount}`}><b>+</b></button>
            </div>
        </div>
    );
};

export default Counter;