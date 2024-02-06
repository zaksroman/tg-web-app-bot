import styles from './BasketList.module.css'
import {useSelector} from "react-redux";
import BasketItem from "../BasketItem/BasketItem";


const BasketList = () => {
    const products = useSelector(state => state.products);
    const chosenProducts = products.filter(item => item.count !== 0)

    return (
        <div>
            <div className={styles.basketlist}>
                {chosenProducts.map(product => {
                    return (
                        <BasketItem
                            key = {product._id}
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