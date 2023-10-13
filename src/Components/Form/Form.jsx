import React, {useCallback, useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../hooks/useTelegram";


const Form = () => {

    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [fio, setFio] = useState('')
    const [subject, setSubject] = useState('physical')
    const {tg} = useTelegram()

    const onSendData = useCallback(()=> {
        const data = {
            city,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data))
    },[city, street, subject])

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect( ()=> {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect( ()=> {
        if (!street || !city){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    },[city, street])
    const onChangeCity = (e) =>{
        setCity(e.target.value)
    }
    const onChangeStreet = (e) =>{
        setStreet(e.target.value)
    }
    const onChangeFio = (e) =>{
        setFio(e.target.value)
    }
    const onChangeSubject = (e) =>{
        setSubject(e.target.value)
    }

    const inputElement = document.getElementById("input");
    const handleOutsideClick = (event) => {
        if (event.target !== inputElement) {
            inputElement.blur();
        }
    };
    document.addEventListener("click", handleOutsideClick);


    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Город'}
                value={city}
                onChange={onChangeCity}
                id={"input"}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Уица'}
                value={street}
                onChange={onChangeStreet}
                id={"input"}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Имя Фамилия'}
                value={fio}
                onChange={onChangeFio}
                id={"input"}
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;