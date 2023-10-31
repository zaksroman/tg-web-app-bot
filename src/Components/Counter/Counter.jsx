import React, {useState} from 'react';
import styles from './Counter.module.css'
import {useDispatch} from "react-redux";
import {Button, Modal} from "react-bootstrap";
import clsx from "clsx";
const Counter = (props) => {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)

    const {type} = props
    const StylesCount = clsx({
        [styles.bigproductitembtn]: type === 'bigproductitem',
        [styles.basketitembtn]: type === 'basketitem',
        [styles.disabled]: showModal
    })

    const onIncrease = () => {
        dispatch({ type: 'INCREASE_ITEM', payload: props.id })
    }

    const onDecrease = () => {
        if (props.checkOnDelite === true && props.count === 1) {
            setShowModal(true)
        } else {
        dispatch({ type: 'DECREASE_ITEM', payload: props.id })
        }
    }

    const handleLeave = () => {
        setShowModal(false)
    }

    const handleConfirmDelete = () => {
        dispatch({ type: 'DECREASE_ITEM', payload: props.id })
        setShowModal(false)
    };

    return (
        <div className={StylesCount}>
            <button onClick={onDecrease} className={`${styles.btn} ${StylesCount}`}>-</button>
            <h3 className={styles.number}>{props.count}</h3>
            <button onClick={onIncrease} className={`${styles.btn} ${StylesCount}`}>+</button>

            <div>
                <Modal show={showModal} onHide={handleLeave} className={`${showModal ? 'modal' : ''}`}>
                    <Modal.Body className={'modal-content'}>
                        <p>Вы уверены, что хотите удалить этот товар из корзины?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleLeave} className={'modal-close-button'}>
                            Оставить
                        </Button>
                        <Button variant="danger" onClick={handleConfirmDelete} className={'modal-close-button'}>
                            Убрать
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Counter;