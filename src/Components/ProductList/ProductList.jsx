import React, {useCallback, useEffect, useState} from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../hooks/useTelegram";


const products = [
    {id: '1', key: '1', title:'Рюкзак', price: 5000, description: 'Походный, большого объема'},
    {id: '2', key: '2', title:'Подушка для сна', price: 1000, description: 'Самая мягкая подушка'},
    {id: '3', key: '3', title:'Мягкая игрушка "Гусь"', price: 2000, description: 'Согреет вас ночью'},
    {id: '4', key: '4', title:'Зарядка для телефона', price: 1000, description: 'Высокой мощьности'},
    {id: '5', key: '5', title:'Зубная паста', price: 200, description: 'Отбеливающая'},
    {id: '6', key: '6', title:'Уран 235', price: 1, description: 'Топливо для вашей АЭС'},
    {id: '7', key: '7', title:'Телевизор', price: 50000, description: 'Высокого разрешения'},
    {id: '8', key: '8', title:'Нефтяная вышка', price: 10000000, description: 'Высокодебитная'},
    {id: '9', key: '9', title:'Остров', price: 50000000, description: 'Маленький остров в Тихом океане'},
    {id: '10', key: '10', title:'Молоко', price: 100, description: 'Домик в деревне 3,2%'},
]
const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price * item.count
    }, 0)
}
const ProductList = () => {

    const [addedItems, setAddedItems] = useState([])
    const {tg, queryId} = useTelegram()

    const onSendData = useCallback(()=> {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }

        fetch('http://localhost:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    },[addedItems])

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])


    let newItems = []
    const onAdd = (product) => {
        newItems = [...addedItems, product].filter(product => product.count !== 0)
        setAddedItems(newItems)
    }

    const increase = (id) => {
        const newCount = addedItems.map(obj => {
            if (obj.id === id) {
                return { ...obj, count: obj.count + 1 };
            }
            return obj;
        })
        setAddedItems(newCount)

        if (newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    const decrease = (id) => {
        const newCount = addedItems.map(obj => {
            if (obj.id === id) {
                return { ...obj, count: obj.count - 1 };
            }
            return obj;
        }).filter(obj => obj.count!==0)
        setAddedItems(newCount)
    }




    return (
        <div className={'list'}>
            <button onClick={onSendData}>test</button>
            {products.map(product => {
                const addedItem = addedItems.find(el => el.id === product.id)
                return (
                <ProductItem
                    count={addedItem ? addedItem.count : 0}
                    increase={increase}
                    decrease={decrease}
                    product={product}
                    onAdd={onAdd}
                    className={'item'}
                />
            )})}
        </div>
    );
};

export default ProductList;