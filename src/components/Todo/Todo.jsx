import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import style from './Todo.module.css';

export default function Todo({todo, onUpdate, onDelete}) {
    const {text, status, id} = todo;

    const handleChange = ({target}) => {
        const status = target.checked ? 'completed' : 'active';
        onUpdate({...todo, status});
    }

    const handleDelete = () =>{
        onDelete(todo);
    }

    return (
        <li className={style.item}>
            <div className={style.checkbox_wrap}>
                <input 
                    type='checkbox' 
                    id={id}
                    checked = {status === 'completed'}
                    onChange={handleChange}
                />
                
                <label htmlFor={id}>{text}</label>
            </div>
            <button 
                type='button' 
                className={style.btn_delete}
                onClick={handleDelete}
            >
                <FaTrashAlt />
            </button>
        </li>
    );
}

