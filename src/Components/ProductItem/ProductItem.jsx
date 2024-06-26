import React from 'react';
import styles from './ProductItem.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import {imgDataApi} from "../../Variables";

const ProductItem = ({product}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = (event) => {
        if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'H3') {
            navigate(`/bigproructitem/${product._id}`);
        }
    }

    const onAddHandler = () => {
        dispatch({ type: 'ADD_ITEM', payload: {...product, count: 1 }})
    }

    return (
        <div className={styles.productlistitem}
             onClick={handleClick}>
            <div>
                <div className={styles.imgConteiner}>
                    <img src={imgDataApi + product.images[0]} ///api/uploads/${product.images[0]}
                         alt="sorry"
                         className={styles.imgConteiner}/>
                </div>
                <div className={styles.title}>
                    <b>{product.title}</b>
                </div>
                <div className={styles.price}>
                    <span></span>
                </div>
            </div>

            {!product.count && (
                <Button
                    type={'productItem'}
                    onClick={onAddHandler}>
                    {product.price} ₽
                </Button>
            )}

            {!!product.count && (
                <Counter
                    _id={product._id}
                    count={product.count}
                    type={'productlistItem'}
                />
            )}
        </div>
    );
};

export default ProductItem;