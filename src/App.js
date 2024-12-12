import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

export default function App() {
    return (
        <div className='wrap'>
            <div className='list_wrap'>
                <TodoList/>
            </div>
        </div>
    );
}

