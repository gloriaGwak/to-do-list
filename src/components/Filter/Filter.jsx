import React from 'react';
import { TiAdjustBrightness } from "react-icons/ti";
import filterStyle from './Filter.module.css';

export default function Filter() {
    return (
        <div>
            <div className={filterStyle.filter}>
                <button type='button' className={filterStyle.dark_mode}>
                    <TiAdjustBrightness />
                </button>
                <ul>
                    {/* {filters.map((filter, index) => (
                        <li key={index}>
                            <button 
                                // className={filterStyle.active}
                                type="button" 
                                onClick={() => handleFilterClick(filter)}
                            >
                                {filter}
                            </button>
                        </li>
                    ))} */}
                    <li className={filterStyle.active}>
                        <button 
                            type='button'
                            // onClick={() => handleFilterClick('all')}
                            // onClick={handleFilterClick}
                        >
                            All
                        </button>
                    </li>
                    <li>
                        <button 
                            type='button'
                            // onClick={() => handleFilterClick(true)}
                            // onClick={handleFilterClick}
                        >
                            Active
                        </button>
                    </li>
                    <li>
                        <button 
                            type='button'
                            // onClick={() => handleFilterClick(false)}
                            // onClick={handleFilterClick}
                        >
                            Completed
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

