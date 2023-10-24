import React from 'react';
import './CarouselItem.css'
import Button from "../../Button/Button";
import {useDispatch, useSelector} from "react-redux";
const CarouselItem = ({item}) => {

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    const prodCaracteristics = (id) => {
        return products.find((product)=> product.id === id )
    }

    const onAddHandler = () => {
        dispatch({ type: 'ADD_ITEM', payload: {...prodCaracteristics(item.id), count: 1 }})
    }

    return (
        <div>
            <img alt={'img'}>{item.img}</img>
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <Button
                className={'add-btn'}
                onClick={onAddHandler}>
                В корзину
            </Button>
        </div>
    );
};

export default CarouselItem;