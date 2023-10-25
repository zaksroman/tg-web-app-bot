import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from "react";
import styles from './Search.module.css'

const Search = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    useEffect(() => {
        filteredProducts()
    }, [search])

    const searchHandler = (e) => {
            setSearch(e.target.value)
    }

    const filteredProducts = () => {
        const filterProducts = products.filter((item) => {
            return item.title.toLowerCase().startsWith(search.toLowerCase()) || !search
        })

        dispatch({type: 'SET_FILTERED_PRODUCTS', payload: filterProducts})
    }

    useEffect(() => {
        const inputElement = document.getElementById("input");

        const handleOutsideClick = (event) => {
            if (event.target !== inputElement) {
                inputElement.blur();
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
            <div className={styles.form}>
                <input type="text" placeholder="Поиск" value={search} onChange={searchHandler} id={"input"} className={styles.input}/>
            </div>
        )
    }
    export default Search