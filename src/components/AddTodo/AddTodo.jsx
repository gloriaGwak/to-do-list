import React, { useState } from 'react';
import {v4 as uuid4} from 'uuid';
import { TiPlus } from "react-icons/ti";
import inputStyle from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState('');
    const handleChange = ({target}) => setText(target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length === 0){
            return
        }
        onAdd({id: uuid4(), text, status:'active'});
        setText('');
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className={inputStyle.input_area}>
                <input 
                    type='text' 
                    id='addItem' 
                    title='Add To-do list' 
                    placeholder='Add to-do list.'
                    value={text}
                    onChange={handleChange}
                />
                <button>Add <TiPlus/></button>
            </div>
        </form>
    );
}

