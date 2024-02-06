import React from 'react';
import styles from './BasketItem.module.css'
import Counter from "../../Counter/Counter";
import {useNavigate} from "react-router-dom";
import DeleteButton from "./DeleteButton/DeleteButton";

const BasketItem = (props) => {
    
    const navigate = useNavigate()
    const handleClick = (event) => {
        if (event.target.tagName !== 'BUTTON') {
            navigate(`/bigproructitem/${props.product._id}`);
        }
    }

    const totalItemPrice = props.product.price * props.product.count
    return (
        <div className={styles.basketItem} onClick={handleClick}>
            <img src={''} alt="test" className={styles.productImage}/>

            <div className={styles.productInfo}>
                <div className={styles.productTitleContainer}>
                    <p className={styles.productTitle}><b>{props.product.title}</b></p>
                </div>

                <div className={styles.productBottomContainer}>

                    <h3 className={styles.totalItemPrice}>{totalItemPrice} ₽</h3>

                    <div className={styles.counter}>
                        <Counter
                            _id={props.product._id}
                            count={props.product.count}
                            type={'basketitem'}
                        />
                    </div>
                </div>
            </div>

                <DeleteButton
                    _id={props.product._id}
                    className={styles.deleteButton}
                />
        </div>
    );

};

export default BasketItem;