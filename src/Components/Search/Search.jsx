import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState, useRef} from "react";
import styles from './Search.module.css'

const Search = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const inputRef = useRef(null);

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

    const handleOutsideClick = (event) => {
        if (inputRef.current && event.target !== inputRef.current) {
            inputRef.current.blur();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
            <div className={styles.form}>
                <input
                    type="text"
                    placeholder="Поиск"
                    value={search}
                    onChange={searchHandler}
                    className={styles.input}
                    ref={inputRef}
                />
            </div>
        )
    }
    export default Search