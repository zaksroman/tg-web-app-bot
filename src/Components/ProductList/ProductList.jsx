import React, {useState} from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../hooks/useTelegram";


const products = [
    {id: '1', title:'Рюкзак', price: 5000, description: 'Походный, большого объема'},
    {id: '2', title:'Подушка для сна', price: 1000, description: 'Самая мягкая подушка'},
    {id: '3', title:'Мягкая игрушка "Гусь"', price: 2000, description: 'Согреет вас ночью'},
    {id: '4', title:'Зарядка для телефона', price: 1000, description: 'Высокой мощьности'},
    {id: '5', title:'Зубная паста', price: 200, description: 'Отбеливающая'},
    {id: '6', title:'Уран 235', price: 1, description: 'Топливо для вашей АЭС'},
    {id: '7', title:'Телевизор', price: 50000, description: 'Высокого разрешения'},
    {id: '8', title:'Нефтяная вышка', price: 10000000, description: 'Высокодебитная'},
    {id: '9', title:'Остров', price: 50000000, description: 'Маленький остров в Тихом океане'},
    {id: '10', title:'Молоко', price: 100, description: 'Домик в деревне 3,2%'},
]
 const getTotalPrice = (items) => {
    return items.reduce((acc, item)=>{
        return acc+= item.price
    }, 0)
 }
const ProductList = () => {

    const [addedItems, setAddedItems] = useState([])
    const {tg} = useTelegram()
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id)
        let newItems = []

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id)
        } else {
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                    />
            ))}
        </div>
    );
};

export default ProductList;