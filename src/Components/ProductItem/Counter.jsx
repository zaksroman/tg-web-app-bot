import React, {useState} from 'react';
import './Counter.css'
import {useDispatch} from "react-redux";
import {Button, Modal} from "react-bootstrap";
const Counter = (props) => {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)

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
        <div className="counter">
            <button onClick={onDecrease} className="btn">-</button>
            <h3 className="number">{props.count}</h3>
            <button onClick={onIncrease} className="btn">+</button>

            <div>
                <Modal show={showModal} onHide={handleLeave} className={'modal'}>
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