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
    const handleClick = () => {
        navigate('/basket');
    }

    useEffect(() =>{
        tg.BackButton.hide()
    })

    return (
        <div>
            <Search/>
                <div className={'list'}>
                    <button onClick={handleClick}>Корзина</button>
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