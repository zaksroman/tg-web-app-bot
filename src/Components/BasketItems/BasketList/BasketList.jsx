import styles from './BasketList.module.css'
import {useSelector} from "react-redux";
import BasketItem from "../BasketItem/BasketItem";


const BasketList = () => {
    const addedItems = useSelector(state => state.addedItems);

    return (
        <div>
            <div className={styles.basketlist}>
                {addedItems.map(product => {
                    return (
                        <BasketItem
                            product={product}
                            type={'basketitem'}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default BasketList;