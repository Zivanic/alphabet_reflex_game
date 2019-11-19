import React from 'react';
import '../style.scss';


const StartButton = (props) => {

    const inPlay = props.inPlay;

    const start = () => {
        if (!inPlay) {
            props.startGame();
        }else{
            props.restartGame();
        }
    }

    return (
        <div className="buttonHolder">
            <button onClick={start}> { inPlay ? 'Restart Game' : 'Start Game' } </button>
        </div>

    )
}

export default StartButton