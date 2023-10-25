import React, {useEffect} from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/MiniItem/ProductItem";
import {useSelector} from "react-redux";
import Search from "../Search/Search";
import {useNavigate} from "react-router-dom";
import {useTelegram} from "../hooks/useTelegram";

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
                <div className={'list'}>
                    <Search/>
                    {/*<button onClick={handleClick}>Корзина</button>*/}
                    {filteredProducts.map(product => {
                        return (
                            <ProductItem
                                product={product}
                                className={'item'}
                            />
                        )})}
                </div>
        </div>
    );
};

export default ProductList;