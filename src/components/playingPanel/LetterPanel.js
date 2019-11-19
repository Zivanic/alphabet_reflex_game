import React from 'react';
import '../style.scss';


const LetterPanel = (props) => {
   
    const letters = props.letters;

    return (
        <div className="lettersPanel">
            { letters.map((letter,index) => {
                return(
                    <span key={index} >{letter} ({index+1})</span>
                )
            })

            }
        </div>

    )
}

export default LetterPanel