import React, { useState } from 'react';
import { TiPlus } from "react-icons/ti";
import style from '../css/AddInput.module.css';

// import style from '../css/List-item.module.css';

export default function AddInput() {
    const [toDo, setToDoList] = useState({item:''});

    const handleChage = (e) => {
        const {item, value} = e.target;
        console.log(item,value)
        setToDoList({item:value});
    }
    const handleAddList = (e) => {
        e.preventdefault();
        console.log("teas")
    }

    return (
        <form action="" onSubmit={handleAddList}>
            <div className={style.input_area}>
                <input 
                    type='text' 
                    id='addItem' 
                    title='Add To-do list' 
                    placeholder='Enter to-do list.'
                    value={toDo.item}
                    onChange={handleChage}
                />
                <button type='button'>Add <TiPlus/></button>
            </div>
        </form>
    );
}