import React from 'react';
import './Counter.css'
const Counter = (props) => {

    const onIncrease = (e) => {
        props.increase(props.id)
        props.onAddHandler()
    }

    const onDecrease = (e) => {
        props.decrease(props.id)
        props.onAddHandler()
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