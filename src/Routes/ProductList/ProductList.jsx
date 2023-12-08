import React, {useEffect} from 'react';
import styles from './ProductList.module.css'
import ProductItem from "../../Components/ProductItem/ProductItem";
import {useSelector} from "react-redux";
import Search from "../../Components/Search/Search";
import {useNavigate} from "react-router-dom";
import {useTelegram} from "../../hooks/useTelegram";
import BasketButton from "../../Components/BasketItems/BasketButton/BasketButton";

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
    },[])

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', handleClick)
        return () => {
            tg.offEvent('mainButtonClicked', handleClick)
        }
    }, [handleClick])

    return (
        <div>
            {/*{<button onClick={handleClick}>Корзинаtest</button>}*/}
            <Search/>
                <div className={styles.list}>
                    {filteredProducts.map(product => {
                        return (
                            <ProductItem
                                product={product}
                                type={'productlistitem'}
                            />
                        )})}
                </div>
            {addedItems.length !==0 && <div> <BasketButton/> </div>}
        </div>
    );
};

export default ProductList;