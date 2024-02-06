import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Counter from "../../Components/Counter/Counter";
import {useSelector, useDispatch} from "react-redux";
import {useTelegram} from "../../hooks/useTelegram";
import Slider from "../../Components/Slider/Slider";
import styles from './BigProductItem.module.css'

const BigProductItem = () => {
    const {tg} = useTelegram()
    const products = useSelector(state => state.products)
    const { _id } = useParams()
    const dispatch = useDispatch()
    const count = useSelector(state => state.products.find(el => el._id === _id))?.count || 0
    const navigate = useNavigate()
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleClickBack = () => {
        tg.MainButton.hide()
        navigate(-1)
    }

    const prodCaracteristics = (_id) => {
        return products.find((product)=> product._id === _id)
    }

    const onAddHandler = () => {
        dispatch({ type: 'ADD_ITEM', payload: {...prodCaracteristics(_id), count: 1 }})
    }

    useEffect(() =>{
        tg.BackButton.show().onClick(handleClickBack)
        return () => {
            tg.BackButton.offClick(handleClickBack)
        }
    }, [handleClickBack])

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
            {/*{<button onClick={onAddHandler}> корзинаtest</button>}*/}
            <div className={styles.sliderContainer}>
                <Slider className={styles.slider}/>
            </div >
            <div>
                {isCollapsed ? (
                    <p>{prodCaracteristics(_id).description.substring(0, 100) + '...'}</p>
                ) : (
                    <p>{prodCaracteristics(_id).description}</p>
                )}
                <button className={`${styles.showHideButton} ${isCollapsed ? 'hidden' : ''}`} onClick={() => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ? 'Показать все' : 'Свернуть'}
                </button>
            </div>

            <div className={styles.bottom}>
                <div className={styles.titlePrice}>
                    <h3><>{prodCaracteristics(_id).title}</></h3>
                    <p>{prodCaracteristics(_id).price} ₽</p>
                </div>
                {!!count && (
                    <Counter
                        type={'bigproductitem'}
                        _id={_id}
                        count={count}
                    />)}
            </div>
        </div>
    );
};

export default BigProductItem;