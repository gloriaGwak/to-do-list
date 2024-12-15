import React, { useEffect, useState } from 'react';
import listStyle from './TodoList.module.css';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState(() => readTodos());

    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
        
        localStorage.todos = JSON.stringify([...todos, todo]);
    }
    const handleUpdate = (updated) => {
        setTodos(todos.map(t => t.id === updated.id ? updated : t));
    }
    const handleDelete = (deleted,idx) => {
        setTodos(todos.filter((t) => t.id !== deleted.id ));
        if (deleted) {
            const deletedData = todos.toSpliced(idx, 1);
            const deletedArr = JSON.stringify([...deletedData]);

            localStorage.setItem('todos', deletedArr);
            return false;
        }
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])

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
                            onDelete={()=>handleDelete(item,idx)} 
                        />
                    ))}
                </ul>
            </div>
            <AddTodo onAdd={handleAdd}/>
        </>
    );
}

function readTodos(){
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter){
    if(filter === 'all'){
        return todos;
    }
    return todos.filter((todo) => todo.status === filter);
}
