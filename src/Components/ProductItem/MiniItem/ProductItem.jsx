import React from 'react';
import styles from './ProductItem.module.css'
import Button from "../../Button/Button";
import Counter from "../Counter";
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
const ProductItem = ({product, className}) => {
    const addedItems = useSelector(state => state.addedItems);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleClick = (event) => {
        if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'H3') {
            navigate(`/bigproructitem/${product.id}`);
        }
    }

    // const onAddHandler = () => {
    //     dispatch({ type: 'ADD_ITEM', payload: {...product, count: count+1} })
    // }

    // const addedItem = addedItems.find(el => el.id === product.id)
    // const count = addedItem?.count || 0

    return (
        <div className={styles.product} onClick={handleClick}>
            <div className={styles.img}></div>
            <div className={styles.price} >
                <span><b>{product.price}</b> р</span>
            </div>
            <div className={styles.title} >{product.title}</div>
            <div className={styles.description} >{product.description}</div>
            <div className={styles.container}>
                <div className={styles.description}>
                    {product.description}
                </div>
                <div className={styles.backdrop}></div>
            </div>
            {/*{!count && (*/}
            {/*    <Button*/}
            {/*        className={styles.addbtn}*/}
            {/*        onClick={onAddHandler}>*/}
            {/*    В корзину*/}
            {/*</Button>)*/}
            {/*}*/}

            {/*{!!count && (*/}
            {/*    <Counter*/}
            {/*        id={product.id}*/}
            {/*        count={count}*/}
            {/*/>)}*/}
        </div>
    );
};

export default ProductItem;