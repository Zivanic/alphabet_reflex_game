import React from 'react';
import '../style.scss';


const LetterPanel = (props) => {
   
    const letters = props.letters;
    const hits = props.correctLetter;
    const misses = props.wrongLetter;

    return (
        <div className="lettersPanel">
            { letters.map((letter,index) => {
                let color;
                if(hits.indexOf(letter) > -1){
                    color = "hit"
                }else if(misses.indexOf(letter) > -1){
                    color = "miss"
                }
                return(
                    <span className={color} key={index} >{letter} ({index+1})</span>
                )
            })

            }
        </div>

    )
}

export default LetterPanel