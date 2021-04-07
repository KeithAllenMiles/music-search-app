import React, { ChangeEvent, useState }  from "react";
import { useDispatch } from "react-redux";
import { updateResultsValue } from "./resultsSlice";



//import styles from './Search.module.css';

export function Results() {
    
    const [resultsValue, setResultsValue] = useState('');
    const dispatch = useDispatch();
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setResultsValue(e.currentTarget.value);
        dispatch(updateResultsValue(e.currentTarget.value));
    }
    
    

    return (
        <div className='resultsContainer'
             id='results'
             onChange={onChange} >
            <div className="resultsTop">
            <h2 className="resultsTitle"> Search Results</h2>
            </div>
            <div className="resultsItem">
                <div className="resultsImg">
                    <div className="imgPlaceholder"></div>
                </div>
                <div className="resultsDetail">
                    {resultsValue}
                    <div className="artist">Artist: Sublime</div>
                    <div className="year">Album: 40oz to Freedom</div>
                </div>
                <div className="resultsAdd">
                    <button className="resultsAddBtn">Add</button>
                </div>
            </div>
            <div className="resultsItem">
                <div className="resultsImg">
                    <div className="imgPlaceholder"></div>
                </div>
                <div className="resultsDetail">
                    {resultsValue}
                    <div className="artist">Artist: Sublime</div>
                    <div className="song">Song: Smoke Two Joints</div>
                    <div className="album">Album: 40oz to Freedom</div>
                </div>
                <div className="resultsAdd">
                    <button className="resultsAddBtn">Add</button>
                </div>
            </div>
            <div className="resultsItem">
                <div className="resultsImg">
                    <div className="imgPlaceholder"></div>
                </div>
                <div className="resultsDetail">
                    {resultsValue}
                    <div className="artist">Artist: Sublime</div>
                    <div className="song">Song: Smoke Two Joints</div>
                    <div className="album">Album: 40oz to Freedom</div>
                </div>
                <div className="resultsAdd">
                    <button className="resultsAddBtn">Add</button>
                </div>
            </div>
            <div className="resultsItem">
                <div className="resultsImg">
                    <div className="imgPlaceholder"></div>
                </div>
                <div className="resultsDetail">
                    {resultsValue}
                    <div className="artist">Artist: Sublime</div>
                    <div className="song">Song: Smoke Two Joints</div>
                    <div className="album">Album: 40oz to Freedom</div>
                </div>
                <div className="resultsAdd">
                    <button className="resultsAddBtn">Add</button>
                </div>
            </div>
            
        
        
        
        </div>
    )

}
