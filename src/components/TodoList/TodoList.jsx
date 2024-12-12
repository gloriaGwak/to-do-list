import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import listStyle from './TodoList.module.css';
import Filter from '../Filter/Filter';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id:'todo0', text:'장보기', status:'active'},
        {id:'todo1', text:'공부하기', status:'active'},
    ]);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const toDolists = JSON.parse(localStorage.getItem('list') || '[]');

        setTodos(toDolists);
    },[])
    

    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
        localStorage.setItem('list', JSON.stringify([...todos, todo]));
    }
    const handleUpdate = (updated) => {
        setTodos(todos.map(t => t.id === updated.id ? updated : t));
    }
    const handleDelete = (deleted,idx) => {
        setTodos(todos.filter((t) => t.id !== deleted.id ))

        if (deleted) {
            const deletedData = todos.toSpliced(idx, 1);
            const deletedArr = JSON.stringify([...deletedData]);

            localStorage.setItem('list', deletedArr);
            return false;
        }
    }

    return (
        <>
            <Filter/>
            <div className={listStyle.list_area}>
                <ul>
                    {todos.map((item,idx) => (
                        <Todo 
                            key={item.id} 
                            todo={item} 
                            onUpdate={handleUpdate} 
                            // onDelete={handleDelete} 
                            onDelete={()=>handleDelete(item,idx)} 
                        />
                    ))}
                </ul>
            </div>
            <AddTodo onAdd={handleAdd}/>
        </>
    );
}

