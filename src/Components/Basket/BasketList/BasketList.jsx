import React from 'react';
import './BasketList.css'
import {useSelector} from "react-redux";
import BasketItem from "../BasketItem/BasketItem";
const BasketList = () => {

    const addedItems = useSelector(state => state.addedItems);

    const getTotalPrice = (items = []) => {
        return items.reduce((acc, item) => {
            return acc += item.price
        }, 0)
    }

    return (
        <div>
            <div>
                {addedItems.map(item => {
                    return (
                        <BasketItem
                            item={item}
                        />
                    )
                })}
            </div>
            <div>
                <h2>Стоимость заказа</h2>
                <h2>{getTotalPrice(addedItems)}</h2>
            </div>
        </div>
    );
};

export default BasketList;