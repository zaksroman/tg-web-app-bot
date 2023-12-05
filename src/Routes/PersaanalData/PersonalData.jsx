import React, {useCallback, useEffect, useState, useRef} from 'react';
import './PersonalData.module.css'
import {useTelegram} from "../../hooks/useTelegram";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


const PersanalData = () => {
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [fio, setFio] = useState('')
    const [comment, setComment] = useState('')
    const [number, setNumber] = useState('')
    const addedItems = useSelector(state => state.addedItems);
    const {tg, user} = useTelegram()

    const inputRef = useRef(null);

    const navigate = useNavigate()
    const handleClickBack = () => {
        navigate('/basket');
    }

    useEffect(() =>{
        tg.BackButton.show().onClick(handleClickBack)
        return () => {
            tg.BackButton.offClick(handleClickBack)
        }
    })

    const tgName = user?.username

    const onSendData = useCallback(()=> {
        const data = {
            city,
            street,
            fio,
            number,
            comment,
            addedItems,
            tgName
        }
        tg.sendData(JSON.stringify(data))
    },[city, street, fio, number, comment])

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect( ()=> {
        tg.MainButton.setParams({
            text: 'Заказать/Оплатить'
        })
    }, [])

    useEffect( ()=> {
        if (!street || !city || !fio || !number){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    },[city, street, fio, number])

    const onChangeCity = (e) =>{
        setCity(e.target.value)
    }
    const onChangeStreet = (e) =>{
        setStreet(e.target.value)
    }
    const onChangeFio = (e) =>{
        setFio(e.target.value)
    }

    const onChangeNumber = (e) =>{
        setNumber(e.target.value)
    }

    const onChangeComment= (e) =>{
        setComment(e.target.value)
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
        <div className={'box'}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Город'}
                value={city}
                onChange={onChangeCity}
                ref={inputRef}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
                ref={inputRef}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Имя Фамилия'}
                value={fio}
                onChange={onChangeFio}
                ref={inputRef}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Комментарий к заказу'}
                value={comment}
                onChange={onChangeComment}
                ref={inputRef}
            />
            <input
                className={'input'}
                type="number"
                placeholder={'Номер телефона'}
                value={number}
                onChange={onChangeNumber}
                ref={inputRef}
            />
        </div>
    );
};

export default PersanalData;