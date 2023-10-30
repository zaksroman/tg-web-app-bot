import React from 'react';
import './BasketItem.css'
import Counter from "../../Counter/Counter";

const BasketItem = (props) => {

    return (
        <div className={'basketitem'}>
            <h1>{props.item.title}</h1>
            <h2>{props.item.description}</h2>
            <h3>{props.item.price}</h3>
            <p>{props.item.count}</p>
            <Counter
                id={props.item.id}
                count={props.item.count}
                checkOnDelite={true}
            />
        </div>
    );
};

export default BasketItem;