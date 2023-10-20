
import './BasketList.css'
import {useSelector} from "react-redux";
import BasketItem from "../BasketItem/BasketItem";


const BasketList = () => {

    const addedItems = useSelector(state => state.addedItems);

    const totalPrice = addedItems.reduce((acc, item) => {
            return acc += item.price * item.count
        }, 0)

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
                <h2>{!totalPrice ? 'В корзине пусто' : `Стоимость заказа ${totalPrice}` }</h2>
            </div>
        </div>
    )
}

export default BasketList;