import React, { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux";
import { updateSearchValue } from "./searchSlice";

//import styles from './Search.module.css';

export function Search() {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
        dispatch(updateSearchValue(e.currentTarget.value));
    }
    

    return (
        
        <div className='searchBox'>
            
            <input
                className='searchField'
                id="searchField"
                type="text"
                value={searchValue}
                onChange={onChange}
                placeholder="Search"
                
            />
        </div>
    )
}

