import React, { useEffect, useState } from 'react';
import listStyle from './TodoList.module.css';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState([
        {id:'todo0', text:'장보기', status:'active'},
        {id:'todo1', text:'공부하기', status:'active'},
    ]);

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
    const filtered = getFilteredItems(todos, filter);

    return (
        <>
            <div className={listStyle.list_area}>
                <ul>
                    {filtered.map((item,idx) => (
                        <Todo 
                            key={item.id} 
                            todo={item} 
                            onUpdate={handleUpdate} 
                            // onDelete={handleDelete} 
                            // onUpdate={()=>handleUpdate(item,idx)} 
                            onDelete={()=>handleDelete(item,idx)} 
                        />
                    ))}
                </ul>
            </div>
            <AddTodo onAdd={handleAdd}/>
        </>
    );
}

function getFilteredItems(todos, filter){
    if(filter === 'all'){
        return todos;
    }
    return todos.filter((todo) => todo.status === filter);
}