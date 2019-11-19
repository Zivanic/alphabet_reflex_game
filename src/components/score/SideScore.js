import React from 'react';
import '../style.scss'; 

const SideScore = (props) => {
    return (
        <div className="sideScore">
            <h4>SCORE:</h4>
            <p className="hit">HIT: {props.hit}</p>
            <p className="miss">MISS: {props.miss}</p>
            <p className="left">LEFT: {props.left}</p>
        </div>

    )
}

export default SideScore