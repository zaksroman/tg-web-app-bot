import React, {useEffect} from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/MiniItem/ProductItem";
import {useTelegram} from "../hooks/useTelegram";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ProductList = (props) => {
    const addedItems = useSelector(state => state.addedItems);
    const navigate = useNavigate();
    const {tg} = useTelegram()

    const handleClick = (event) => {
        navigate('/basket');
    }

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
        <div className={'list'}>
            {props.products.map(product => {
                return (
                <ProductItem
                    product={product}
                    className={'item'}
                />
            )})}
        </div>
    );
};

export default ProductList;