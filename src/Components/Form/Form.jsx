import React, {useCallback, useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../hooks/useTelegram";
import { StyleSheet, View, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
const Form = () => {

    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
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

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        input: {
        },
    });

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <Input
                inputStyle={styles.input}
                // className={'input'}
                type="text"
                placeholder={'Город'}
                value={city}
                onChange={onChangeCity}
                id={"input"}
            />
            <Input
                inputStyle={styles.input}
                // className={'input'}
                type="text"
                placeholder={'Уица'}
                value={street}
                onChange={onChangeStreet}
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