import React from 'react';
import {useNavigate} from "react-router-dom";
import Counter from "../Counter";
import Button from "../../Button/Button";

const BigProoductItem = (props) => {
    const navigate = useNavigate()
    const handleClick = (event) => {
        navigate('/');
    }
    return (
        <div>
            <button onClick={handleClick}>BACK</button>
            <h1>BigProoductItem</h1>

            {/*{!count && (*/}
            {/*    <Button*/}
            {/*        className={'add-btn'}*/}
            {/*        onClick={onAddHandler}>*/}
            {/*        Добавить в корзину*/}
            {/*    </Button>)*/}
            {/*}*/}

            {/*{!!count && (*/}
            {/*    <Counter*/}
            {/*        onAddHandler={onAddHandler}*/}
            {/*        id={product.id}*/}
            {/*        count={count}*/}
            {/*        increase={increase}*/}
            {/*        decrease={decrease}*/}
            {/*    />)}*/}
        </div>
    );
};

export default BigProoductItem;