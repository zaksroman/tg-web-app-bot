
import styles from './BasketList.module.css'
import {useSelector} from "react-redux";
import ProductItem from "../../../ProductItem/ProductItem";


const BasketList = () => {
    const addedItems = useSelector(state => state.addedItems);

    return (
        <div>
            <div className={styles.basketlist}>
                {addedItems.map(product => {
                    return (
                        <ProductItem
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