import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList';
import DarkModeProvider from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
export default function App() {
    const [filter, setFilter] = useState(filters[0]);

    return (
        <DarkModeProvider>
            <div className='wrap'>
                <h1>To Do List</h1>
                <div className='list_wrap'>
                    <Header 
                        filters={filters} 
                        filter={filter} 
                        onFilterChange={setFilter}
                    />
                    <TodoList filter={filter} />
                </div>
                <footer>
                    <p>Designed & Developed by Gloria Gwak</p>
                </footer>
            </div>
        </DarkModeProvider>
    );
}

