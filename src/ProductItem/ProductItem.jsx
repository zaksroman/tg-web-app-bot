import React from 'react';
import styles from './ProductItem.module.css'
import {useNavigate} from "react-router-dom";
import clsx from 'clsx'

const ProductItem = (props) => {

    const navigate = useNavigate()

    const {type} = props
    const ProductItemStyle = clsx({
        [styles.productlistitem]: true, // базовый класс, который всегда применяется
        // 'button--primary': type === 'ProductList', // применяется, если type === 'primary'
        // 'button--secondary': type === 'secondary' // применяется, если type === 'secondary'
    })

    const handleClick = (event) => {
            navigate(`/bigproructitem/${props.product.id}`);
    }

    return (
        <div className={ProductItemStyle} onClick={handleClick}>
            <div className={styles.img}></div>
            <div className={styles.price} >
                <span><b>{props.product.price}</b> р</span>
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