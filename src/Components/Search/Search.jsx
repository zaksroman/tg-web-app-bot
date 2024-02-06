import {useDispatch} from 'react-redux';
import {useEffect, useState, useRef} from "react";
import styles from './Search.module.css'

const Search = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        dispatch({type: 'SET_FILTER', payload: search})
    }, [search])

    const searchHandler = (e) => {
            setSearch(e.target.value)
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
    }, [handleOutsideClick]);

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