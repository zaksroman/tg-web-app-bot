import React, {useState} from 'react';
import './ProductItem.css'
import Button from "../../Button/Button";
import Counter from "../Counter";
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
const ProductItem = ({product, className, count, increase, decrease}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = (event) => {
        if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'H3') {
            navigate('/bigproructitem');
        }
    }

    const onAddHandler = () => {
        dispatch({ type: 'ADD_ITEM', payload: {...product, count:1} })
    }

    return (
        <div className={'product ' + className} onClick={handleClick}>
            <div className={'img'} ></div>
            <div className={'title'} >{product.title}</div>
            <div className={'description'} >{product.description}</div>
            <div className={'price'} >
                <span>Стоимость: <b>{product.price}</b></span>
            </div>

            {!count && (
                <Button
                    className={'add-btn'}
                    onClick={onAddHandler}>
                Добавить в корзину
            </Button>)
            }

            {!!count && (
                <Counter
                    onAddHandler={onAddHandler}
                    id={product.id}
                    count={count}
                    increase={increase}
                    decrease={decrease}
            />)}
        </div>
    );
};

export default ProductItem;