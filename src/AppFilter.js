import React, { useState } from 'react';
import Filter from './components/Filter';
import style from './css/Filter.module.css';


export default function AppFilter() {
    
    return (
        <>
            <div className={style.filter}>
                <Filter/>
            </div>
        </>
    );
}