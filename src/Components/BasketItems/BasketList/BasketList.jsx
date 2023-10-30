
import './BasketList.css'
import {useSelector} from "react-redux";
import BasketItem from "../BasketItem/BasketItem";


const BasketList = () => {
    const addedItems = useSelector(state => state.addedItems);

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
        </div>
    )
}

export default BasketList;