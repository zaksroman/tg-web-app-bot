import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Counter from "../../Components/Counter/Counter";
import Button from "../../Components/Button/Button";
import {useSelector, useDispatch} from "react-redux";
import {useTelegram} from "../../hooks/useTelegram";
import Slider from "../../Components/Slider/Slider";
import styles from './BigProductItem.module.css'

const BigProductItem = () => {
    const {tg} = useTelegram()
    const products = useSelector(state => state.products)
    const { id } = useParams()
    const dispatch = useDispatch()
    const count = useSelector(state => state.addedItems.find(el => el.id === id))?.count || 0

    const addedItems = useSelector(state => state.addedItems);

    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleClickBack = () => {
        tg.MainButton.hide()
        navigate(-1)
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
        tg.onEvent('mainButtonClicked', onAddHandler)
        return () => {
            tg.offEvent('mainButtonClicked', onAddHandler)
        }
    }, [onAddHandler])


    if (count !== 0) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
        tg.MainButton.setParams({
            text: `Добавить в корзину`
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.sliderContainer}>
                <Slider className={styles.slider}/>
            </div >
            <div>
                <h2>{prodCaracteristics(id).title}</h2>
                <h3>{prodCaracteristics(id).price} ₽</h3>
                {isCollapsed ? (
                    <p>{prodCaracteristics(id).description.substring(0, 100) + '...'}</p>
                ) : (
                    <p>{prodCaracteristics(id).description}</p>
                )}
                <button className={`${styles.showHideButton} ${isCollapsed ? 'hidden' : ''}`} onClick={() => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ? 'Показать полностью' : 'Свернуть'}
                </button>
            </div>

            {/*{!count && (*/}
            {/*    <Button*/}
            {/*        type={'bigproductitem'}*/}
            {/*        onClick={onAddHandler}*/}
            {/*    >*/}
            {/*        Добавить в корзину*/}
            {/*    </Button>)*/}
            {/*}*/}

            {!!count && (
                <Counter
                    type={'bigproductitem'}
                    id={id}
                    count={count}
                />)}

            <button onClick={onAddHandler}> корзина</button>
        </div>
    );
};

export default BigProductItem;