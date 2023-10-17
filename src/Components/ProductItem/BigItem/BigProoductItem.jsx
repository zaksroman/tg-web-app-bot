import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Counter from "../Counter";
import Button from "../../Button/Button";
import {useSelector, useDispatch} from "react-redux";

const BigProoductItem = (props) => {

    const { id } = useParams()
    const dispatch = useDispatch();
    const count = useSelector(state => state.addedItems.find(el => el.id === id))?.count || 0
    const navigate = useNavigate()
    const handleClick = (event) => {
        navigate('/')
    }

    const onAddHandler = () => {
        dispatch({ type: 'ADD_ITEM', payload: id })
    }

    const title = (id) => {
        return props.products.find((product)=> product.id === id ).title
    }

    return (
        <div>
            <button onClick={handleClick}>BACK</button>
            <h1>{title(id)}</h1>

            {!count && (
                <Button
                    className={'add-btn'}
                    onClick={onAddHandler}>
                    Добавить в корзину
                </Button>)
            }

            {!!count && (
                <Counter
                    id={props.product.id}
                    count={count}
                />)}
        </div>
    );
};

export default BigProoductItem;