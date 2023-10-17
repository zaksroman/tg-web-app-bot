import React, {useState} from 'react';
import './ProductItem.css'
import Button from "../../Button/Button";
import Counter from "../Counter";
import {useNavigate} from "react-router-dom";

const ProductItem = ({product, className, onAdd, count, increase, decrease}) => {

    const navigate = useNavigate()
    const handleClick = (event) => {
        navigate('/bigproructitem');
    }
    const onAddHandler = () => {
        onAdd({...product, count:1})
    }

    return (
        <div className={'product ' + className} >
            <div className={'img'} onClick={handleClick}></div>
            <div className={'title'} onClick={handleClick}>{product.title}</div>
            <div className={'description'} onClick={handleClick}>{product.description}</div>
            <div className={'price'} onClick={handleClick}>
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