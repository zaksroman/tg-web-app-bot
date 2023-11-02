import React from 'react';
import './BasketItem.css'
import Counter from "../../Counter/Counter";
import styles from "../../ProductItem/ProductItem.module.css";
import {useNavigate} from "react-router-dom";

const BasketItem = (props) => {
    
    const navigate = useNavigate()
    const handleClick = (event) => {
        if (event.target.tagName !== 'BUTTON') {
            navigate(`/bigproructitem/${props.product.id}`);
        }
    }
    return (
        <div className={styles.basketitem} onClick={handleClick}>
            <div className={styles.img}>
                <img src={props.product.img[0]} alt="test"/>
            </div>
            <p><b>{props.product.title}</b></p>
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