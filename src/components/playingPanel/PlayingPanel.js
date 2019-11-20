import React from 'react';
import '../style.scss';


const PlayingPanel = (props) => {
    let text = props.currNum;
    const inPlay = props.inPlay;
    
    const playerGuess = (e) => {
        props.handleInput(e.target.value)
    }

    return (
        <div className="inplayWrapper">
            <h1>{ inPlay ? `${text}` : 'Press Start Button To Play'}</h1>
            <input  value={props.inputValue} type="text" placeholder="Input Letter" maxLength="1" onChange={playerGuess} />
        </div>

    )
}

export default PlayingPanel