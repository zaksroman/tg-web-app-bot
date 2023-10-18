import React from 'react';
import './BasketList.css'
import {useSelector} from "react-redux";
import BasketItem from "../BasketItem/BasketItem";
const BasketList = () => {

    const addedItems = useSelector(state => state.addedItems);

    const amount = addedItems.reduce((acc, item) => {
        return acc += item.price
    })

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
                <h2>Общая стоимость заказа {amount}</h2>
            </div>
        </div>
    );
};

export default BasketList;