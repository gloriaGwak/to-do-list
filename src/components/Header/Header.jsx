import React, { useContext, useState } from 'react';
import { TiAdjustBrightness } from "react-icons/ti";
import filterStyle from './Header.module.css';
import DarkModeContext from '../../context/DarkModeContext';

export default function Header({filters, filter, onFilterChange}) {
    // const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    return (
        <header className={filterStyle.filters}>
            <button type='button' 
                className={filterStyle.dark_mode}
                // onClick={()=>toggleDarkMode}
            >
                <TiAdjustBrightness />
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

