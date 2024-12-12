import React, { useState } from 'react';
import { TiAdjustBrightness } from "react-icons/ti";
import style from '../css/Filter.module.css';

export default function Filter() {
    
    return (
        <>
            <button type='button' className={style.dark_mode}>
                <TiAdjustBrightness />
            </button>
            <ul>
                <li>
                    <button type='button'>All</button>
                </li>
                <li>
                    <button type='button'>Active</button>
                </li>
                <li>
                    <button type='button'>Completed</button>
                </li>
            </ul>
        </>
    );
}