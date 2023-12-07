import React from 'react';
import styles from './BasketItem.module.css'
import Counter from "../../Counter/Counter";
import {useNavigate} from "react-router-dom";
import DeleteButton from "./DeleteButton/DeleteButton";

const BasketItem = (props) => {
    
    const navigate = useNavigate()
    const handleClick = (event) => {
        if (event.target.tagName !== 'BUTTON') {
            navigate(`/bigproructitem/${props.product.id}`);
        }
    }
    const totalItemPrice = props.product.price * props.product.count
    return (
        <div className={styles.basketitem} onClick={handleClick}>
            <div className={styles.img}>
                <img src={props.product.img[0]} alt="test"/>
            </div>
            <div>
                <p><b>{props.product.title}</b></p>
                    <h3>{totalItemPrice} ₽</h3>
                    <Counter
                        id={props.product.id}
                        count={props.product.count}
                        type={'basketitem'}
                    />
            </div>
            <div>
                <DeleteButton
                    id={props.product.id}
                />
            </div>
        </div>
    );
};

export default BasketItem;