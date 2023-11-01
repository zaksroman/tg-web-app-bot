import React from 'react';
import './BasketItem.css'
import Counter from "../../Counter/Counter";
import styles from "../../ProductItem/ProductItem.module.css";

const BasketItem = (props) => {

    return (
        <div className={'basketitem'}>
            <div className={styles.img}></div>
            <h2>{props.product.title}</h2>
            <h3>{props.product.price}</h3>
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