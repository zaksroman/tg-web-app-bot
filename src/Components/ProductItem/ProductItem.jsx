import React, {useState} from 'react';
import './ProductItem.css'
import Button from "../Button/Button";
import Counter from "./Counter";

const ProductItem = ({product, className, onAdd, count, increase, decrease}) => {


    const onAddHandler = () => {
        onAdd({...product, count:1})
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'}></div>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
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