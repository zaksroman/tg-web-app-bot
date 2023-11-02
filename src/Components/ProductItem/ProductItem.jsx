import React from 'react';
import styles from './ProductItem.module.css'
import {useNavigate} from "react-router-dom";

const ProductItem = (props) => {
    const navigate = useNavigate()

    const handleClick = (event) => {
        if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'H3') {
            navigate(`/bigproructitem/${props.product.id}`);
        }
    }

    return (
        <div className={styles.productlistitem}
             onClick={handleClick}>
            <div className={styles.annotation}>
                <div className={styles.img}>
                    <img src={props.product.img[0]} alt="test"/>
                </div>
                <div className={styles.price}>
                    <span><b>{props.product.price}</b> р</span>
                </div>
            </div>
                <div className={styles.title}>{props.product.title}</div>
                <div className={styles.container}>
                    <div className={styles.description}>
                        {props.product.description}
                    </div>
                </div>
        </div>
    );
};

export default ProductItem;