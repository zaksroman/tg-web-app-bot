import React, {useEffect} from 'react';
import styles from './ProductList.module.css'
import ProductItem from "../../ProductItem/ProductItem";
import {useSelector} from "react-redux";
import Search from "../../Components/Search/Search";
import {useNavigate} from "react-router-dom";
import {useTelegram} from "../../hooks/useTelegram";

const ProductList = () => {
    const {tg} = useTelegram()
    const filteredProducts = useSelector(state => state.filteredProducts);
    const navigate = useNavigate();
    const addedItems = useSelector(state => state.addedItems);

    const handleClick = () => {
        navigate('/basket');
    }

    useEffect(() =>{
        tg.BackButton.hide()
    })

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
        <div>
            <Search/>
                <div className={styles.list}>
                    {/*<button onClick={handleClick}>Корзина</button>*/}
                    {filteredProducts.map(product => {
                        return (
                            <ProductItem
                                product={product}
                                // className={styles.item}
                            />
                        )})}
                </div>
        </div>
    );
};

export default ProductList;