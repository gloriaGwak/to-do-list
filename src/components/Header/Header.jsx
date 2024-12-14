import React from 'react';
import { TiAdjustBrightness } from "react-icons/ti";
import filterStyle from './Header.module.css';

export default function Header({filters, filter, onFilterChange}) {
    
    return (
        <header className={filterStyle.filter}>
            <button type='button' className={filterStyle.dark_mode}>
                <TiAdjustBrightness />
            </button>
            <ul>
                {filters.map((value, index) => 
                    <li key={index}>
                        {/* {value && } */}
                        <button 
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

