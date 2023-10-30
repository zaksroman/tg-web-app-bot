import React from 'react';
import './CarouselItem.css'
import Button from "../../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
const CarouselItem = ({item}) => {

    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const prodCaracteristics = (id) => {
        return products.find((product)=> product.id === id )
    }

    const handleClick = (event) => {
        if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'H3') {
            navigate(`/bigproructitem/${item.id}`);
        }
    }

    const onAddHandler = () => {
        dispatch({ type: 'ADD_ITEM', payload: {...prodCaracteristics(item.id), count: 1 }})
    }

    return (
        <div onClick={handleClick}>
            {/*<div>{item.img}</div>*/}
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