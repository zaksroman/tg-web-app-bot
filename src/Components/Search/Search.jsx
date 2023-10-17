import { useDispatch } from 'react-redux';
import {useCallback, useEffect, useState} from "react";

const Search = ({ products }) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const searchHandler = (e) => {
            const value = e.target.value;
            setSearch(value);
            filterProducts(value);
    };
    const filterProducts = useCallback((value) => {
            const filteredProducts = products.filter((item) => {
                return item.title.toLowerCase().startsWith(value.toLowerCase()) || !value;
            });
            dispatch({type: 'SET_FILTERED_PRODUCTS', payload: filteredProducts});
    }, [dispatch, products]);

    useEffect(() => {filterProducts(search);}, [search, filterProducts]);

    const inputElement = document.getElementById("input");
    const handleOutsideClick = (event) => {
        if (event.target !== inputElement) {
            inputElement.blur();
        }
    };
    document.addEventListener("click", handleOutsideClick);


    return (
            <div>
                <input type="text" placeholder="Поиск" value={search} onChange={searchHandler} id={"input"}/>
            </div>
        );
    };
    export default Search;