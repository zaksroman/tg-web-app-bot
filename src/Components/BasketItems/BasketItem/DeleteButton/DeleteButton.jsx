import React from 'react';
import styles from './DeleteButton.module.css'
import {useDispatch} from "react-redux";

const DeleteButton = (props) => {

    const dispatch = useDispatch()

    const deleteHandler = (e) => {
        e.stopPropagation()
        dispatch({ type: 'DELETE_ITEM', payload: props.id })
    }

    return (
        <div className={styles.delButton}>
            <button onClick={deleteHandler}></button>
        </div>
    );
};

export default DeleteButton;