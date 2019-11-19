import React from 'react';
import '../style.scss';


const PlayingPanel = (props) => {

    const inPlay = props.inPlay;
    const text = inPlay ? props.currNum : 'Press Start Button To Play'
    const playerGuess = (e) => {
        props.handleInput(e.target.value)
    }

    return (
        <div className="inplayWrapper">
            <h1>{text}</h1>
            <input value={props.inputValue} type="text" placeholder="Input Letter" maxLength="1" onChange={playerGuess} />
        </div>

    )
}

export default PlayingPanel