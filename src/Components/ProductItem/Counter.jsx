import React from 'react';
import './Counter.css'
import {useDispatch} from "react-redux";
const Counter = (props) => {

    const dispatch = useDispatch()

    const onIncrease = (e) => {
        dispatch({ type: 'INCREASE_ITEM', payload: props.id })
    }

    const onDecrease = (e) => {
        dispatch({ type: 'DECREASE_ITEM', payload: props.id })
    }

    return (
        <div className="counter">
            <button onClick={onDecrease} className="btn">-</button>
            <h3 className="number">{props.count}</h3>
            <button onClick={onIncrease} className="btn">+</button>
        </div>
    );
};

export default Counter;