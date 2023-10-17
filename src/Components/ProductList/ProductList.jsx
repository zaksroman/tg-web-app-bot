import React, {useCallback, useEffect, useState} from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/MiniItem/ProductItem";
import {useTelegram} from "../hooks/useTelegram";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const products = [
    {id: '1', key: '1', title:'Рюкзак', price: 5000, description: 'Походный, большого объема', img: new Image()  },
    {id: '2', key: '2', title:'Подушка для сна', price: 1000, description: 'Самая мягкая подушка', img: new Image()  },
    {id: '3', key: '3', title:'Мягкая игрушка "Гусь"', price: 2000, description: 'Согреет вас ночью', img: new Image()  },
    {id: '4', key: '4', title:'Зарядка для телефона', price: 1000, description: 'Высокой мощьности', img: new Image()  },
    {id: '5', key: '5', title:'Зубная паста', price: 200, description: 'Отбеливающая', img: new Image()  },
    {id: '6', key: '6', title:'Уран 235', price: 1, description: 'Топливо для вашей АЭС', img: new Image()  },
    {id: '7', key: '7', title:'Телевизор', price: 50000, description: 'Высокого разрешения', img: new Image()  },
    {id: '8', key: '8', title:'Нефтяная вышка', price: 10000000, description: 'Высокодебитная', img: new Image()  },
    {id: '9', key: '9', title:'Остров', price: 50000000, description: 'Маленький остров в Тихом океане', img: new Image()  },
    {id: '10', key: '10', title:'Молоко', price: 100, description: 'Домик в деревне 3,2%', img: new Image()  },
]

const ProductList = () => {
    const addedItems = useSelector(state => state.addedItems);
    const navigate = useNavigate();
    const {tg, queryId} = useTelegram()

    const handleClick = (event) => {
        navigate('/basket');
    }

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
        <div className={'list'}>
            {products.map(product => {
                return (
                <ProductItem
                    product={product}
                    className={'item'}
                />
            )})}
        </div>
    );
};

export default ProductList;