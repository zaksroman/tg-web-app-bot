import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Counter from "../Counter";
import Button from "../../Button/Button";
import {useSelector, useDispatch} from "react-redux";
import {useTelegram} from "../../hooks/useTelegram";

const BigProoductItem = () => {
    const {tg} = useTelegram()
    const products = useSelector(state => state.products)
    const { id } = useParams()
    const dispatch = useDispatch()
    const count = useSelector(state => state.addedItems.find(el => el.id === id))?.count || 0
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    const prodCaracteristics = (id) => {
        return products.find((product)=> product.id === id )
    }

    const onAddHandler = () => {
        dispatch({ type: 'ADD_ITEM', payload: {...prodCaracteristics(id), count: 1 }})
    }
    tg.BackButton.isVisible.onClick(handleClick)
    return (
        <div>
            <button onClick={handleClick}>BACK</button>
            <h1>{prodCaracteristics(id).title}</h1>
            <h2>{prodCaracteristics(id).description}</h2>
            <h3>{prodCaracteristics(id).price}</h3>

            {!count && (
                <Button
                    className={'add-btn'}
                    onClick={onAddHandler}>
                    Добавить в корзину
                </Button>)
            }

            {!!count && (
                <Counter
                    id={id}
                    count={count}
                />)}
        </div>
    );
};

export default BigProoductItem;