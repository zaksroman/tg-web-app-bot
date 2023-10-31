import React from 'react';
import styles from './ProductItem.module.css'
import {useNavigate} from "react-router-dom";
import clsx from 'clsx'
import Counter from "../Components/Counter/Counter";
import Button from "../Components/Button/Button";
import {useDispatch, useSelector} from "react-redux";

const ProductItem = (props) => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {type} = props

    const ProductItemStyle = clsx({
        [styles.productlistitem]: true,
        [styles.basketitem]: type === 'basketitem',
        [styles.carouselitem]: type === 'carouselitem'
    })

    const prodCaracteristics = (id) => {
        return products.find((product)=> product.id === id )
    }

    const handleClick = (event) => {
        if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'H3') {
            navigate(`/bigproructitem/${props.product.id}`);
        }
    }

    const onAddHandler = () => {
        dispatch({ type: 'ADD_ITEM', payload: {...prodCaracteristics(props.product.id), count: 1 }})
    }

    return (
        <div className={ProductItemStyle} onClick={handleClick}>
            <div className={styles.annotation}>
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
            {type === 'basketitem'
                ? <Counter
                type={'basketitem'}
                id={props.product.id}
                count={props.product.count}
                checkOnDelite={true}
                />
                : null
            }

            {type === 'carouselitem'
                ?<Button
                    type={'carouselitem'}
                    onClick={onAddHandler}
                >
                    В корзину
                </Button>
                : null
            }
        </div>
    );
};

export default ProductItem;