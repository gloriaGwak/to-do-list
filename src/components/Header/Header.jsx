import React, { useContext, useState } from 'react';
import filterStyle from './Header.module.css';
import DarkModeContext, { useDarkMode } from '../../context/DarkModeContext';
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({filters, filter, onFilterChange}) {
    const {darkMode, toggleDarkMode} = useDarkMode();
    
    return (
        <header className={filterStyle.filters}>
            <button type='button' 
                className={filterStyle.btn_toggle}
                onClick={toggleDarkMode}
            >
                {!darkMode && <HiMoon />}
                {darkMode && <HiSun />}
                
            </button>
            <ul>
                {filters.map((value, index) => 
                    <li key={index}>
                        <button 
                            className={`${filterStyle.filter} ${filter === value && filterStyle.selected}`}
                            type='button'
                            onClick={() => onFilterChange(value)}
                        >
                            {value}
                        </button>
                    </li>
                )}
            </ul>
        </header>
    );
}

