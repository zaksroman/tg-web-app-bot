import React from 'react';

const Counter = (props) => {

    const onIncrease = (e) => {
        props.increase(props.id)
    }

    const onDecrease = (e) => {
        props.decrease(props.id)
    }

    return (
        <div>
            <button onClick={onDecrease}>-</button>
            <h3>{props.count}</h3>
            <button onClick={onIncrease}>+</button>
        </div>
    );
};

export default Counter;