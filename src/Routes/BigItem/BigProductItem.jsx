import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Counter from "../../Components/Counter/Counter";
import Button from "../../Components/Button/Button";
import {useSelector, useDispatch} from "react-redux";
import {useTelegram} from "../../hooks/useTelegram";
import Slider from "../../Components/Slider/Slider";

const BigProductItem = () => {
    const {tg} = useTelegram()
    const products = useSelector(state => state.products)
    const { id } = useParams()
    const dispatch = useDispatch()
    const count = useSelector(state => state.addedItems.find(el => el.id === id))?.count || 0
    const navigate = useNavigate()
    const addedItems = useSelector(state => state.addedItems);

    const handleClickBack = () => {
        navigate(-1)
    }

    const handleClick = () => {
        navigate('/basket');
    }
    const prodCaracteristics = (id) => {
        return products.find((product)=> product.id === id )
    }

    const onAddHandler = () => {
        dispatch({ type: 'ADD_ITEM', payload: {...prodCaracteristics(id), count: 1 }})
    }

    useEffect(() =>{
        tg.BackButton.show().onClick(handleClickBack)
        return () => {
            tg.BackButton.offClick(handleClickBack)
        }
    }, [])

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', handleClick)
        return () => {
            tg.offEvent('mainButtonClicked', handleClick)
        }
    }, [handleClick])


    if (addedItems.length === 0) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
        tg.MainButton.setParams({
            text: `Перейти в корзину`
        })
    }

    return (
        <div>
            {/*<button onClick={handleClick}>BACK</button>*/}
            <div>
                <Slider/>
            </div>
            <h1>{prodCaracteristics(id).title}</h1>
            <h2>{prodCaracteristics(id).price} р</h2>
            <h3>{prodCaracteristics(id).description}</h3>

            {!count && (
                <Button
                    type={'bigproductitem'}
                    onClick={onAddHandler}>
                    Добавить в корзину
                </Button>)
            }

            {!!count && (
                <Counter
                    type={'bigproductitem'}
                    id={id}
                    count={count}
                />)}
        </div>
    );
};

export default BigProductItem;