import React, { useState } from 'react';
import AppFilter from './AppFilter';
// import AppAddInput from './AppAddInput';
import { TiPlus } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import style from './css/Wrap.module.css';
import listStyle from './css/List-item.module.css';
import inputStyle from './css/AddInput.module.css';

export default function AppListWrap() {
    const [value, setValue] = useState('');
    const [addItem, setAddItem] = useState([]);


    const handleChange = ({target}) => {
        setValue(target.value);
        console.log(target.value)
    }
    const handleAddList = (e) => {
        e.preventDefault();
        setAddItem([...addItem, value]);
        console.log(addItem)
    }
    
    return (
        <>
            <div className={style.wrap}>
                <div className={style.list_wrap}>
                    <form action="" onSubmit={handleAddList}>
                        <AppFilter />
                        <div className={style.list_area}>
                            <ul>
                                <li className={listStyle.item}>
                                    <div className={listStyle.checkbox_wrap}>
                                        <input 
                                            type='checkbox' 
                                            id='item1'
                                        />
                                        
                                        <label htmlFor='item1'>Study react</label>
                                    </div>
                                    <button type='button' className={style.btn_delete}>
                                        <MdDeleteForever />
                                    </button>
                                </li>
                                {addItem.map(function(data,idx) {
                                    return (
                                        <li key={idx} className={listStyle.item}>
                                            <div className={listStyle.checkbox_wrap}>
                                                <input 
                                                    type='checkbox' 
                                                    id={'toDo'+idx}
                                                />
                                                
                                                <label htmlFor={idx}>{data}</label>
                                            </div>
                                            <button type='button' className={style.btn_delete}>
                                                <MdDeleteForever />
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        {/* <AppAddInput /> */}
                        
                        <div className={inputStyle.input_area}>
                            <input 
                                type='text' 
                                id='addItem' 
                                title='Add To-do list' 
                                placeholder='Enter to-do list.'
                                value={value}
                                onChange={handleChange}
                            />
                            <button>Add <TiPlus/></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}