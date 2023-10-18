import React  from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/MiniItem/ProductItem";
import {useSelector} from "react-redux";
import Search from "../Search/Search";

const ProductList = () => {
    const filteredProducts = useSelector(state => state.filteredProducts);

    return (
        <div>
            <Search/>
                <div className={'list'}>
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