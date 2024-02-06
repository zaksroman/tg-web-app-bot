import React, {useEffect} from 'react';
import styles from './ProductList.module.css'
import ProductItem from "../../Components/ProductItem/ProductItem";
import {useSelector} from "react-redux";
import Search from "../../Components/Search/Search";
import {useNavigate} from "react-router-dom";
import {useTelegram} from "../../hooks/useTelegram";

const ProductList = () => {
    const {tg} = useTelegram()
    const navigate = useNavigate();
    const addedItems = useSelector(state => state.addedItems);
    const filter = useSelector(state => state.filter)
    const products = useSelector(state => state.products)

    const handleClick = () => {
        navigate('/basket');
    }

    useEffect(() =>{
        tg.BackButton.hide()
    },[])

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', handleClick)
        return () => {
            tg.offEvent('mainButtonClicked', handleClick)
        }
    }, [handleClick])

    const totalPrice = products.reduce((acc, item) => {
        return acc += item.price * item.count
    }, 0)

    const totalCount = products.reduce((acc, item) => {
        return acc += item.count
    }, 0)

    if (addedItems.length === 0) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
        tg.MainButton.setParams({
            text:
                `Корзина · ${totalCount}     ${totalPrice} ₽`,
            css: {
                padding: "0 20px"
            }
        })
    }

    const filteredProducts = products.filter((item) => {
            return item.title.toLowerCase().startsWith(filter.toLowerCase())
        })


    return (
        <div>
            {/*{<button onClick={handleClick}>Корзинаtest</button>}*/}
            <Search/>
                <div className={styles.list}>
                    {filteredProducts.map(product => {
                        return (
                            <ProductItem
                                key={product._id}
                                product={product}
                                type={'productlistitem'}
                            />
                        )})}
                </div>
        </div>
    );
};

export default ProductList;