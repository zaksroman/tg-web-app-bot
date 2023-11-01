import React from 'react';
import './BasketItem.css'
import Counter from "../../Counter/Counter";

const BasketItem = (props) => {

    return (
        <div className={'basketitem'}>
            <h1>{props.product.title}</h1>
            <h2>{props.product.description}</h2>
            <h3>{props.product.price}</h3>
            <p>{props.product.count}</p>
            <Counter
                id={props.product.id}
                count={props.product.count}
                checkOnDelite={true}
                type={'basketitem'}
            />
        </div>
    );
};

export default BasketItem;