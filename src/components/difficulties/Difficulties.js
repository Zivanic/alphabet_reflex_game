import React from 'react';
import '../style.scss';


const Difficulties = (props) => {

    const radioChangeHandler = (event) => {
        if(!props.inPlay){
            props.setDifficulty(event.target.value)
        }
    }

    const isSelected = props.currLevel;
    return (
        <div className="radioButton">
            <input type="radio" name="level" value="5000" checked={isSelected == "5000"} onChange={radioChangeHandler} /> Easy
            <input type="radio" name="level" value="3500" checked={isSelected == "3500"} onChange={radioChangeHandler} /> Medium
            <input type="radio" name="level" value="2000" checked={isSelected == "2000"} onChange={radioChangeHandler} /> Hard
        </div>

    )
}

export default Difficulties