import React, {useState} from 'react';
import './Rating.css';


const Rating = ({rank}) => {

    const [score, setScore] = useState(rank || 0);

    const onStartClick = (newScore) => {
        setScore(newScore);
    }

    const stars = [];

    for (let i= 1; i<=5; i++) {

        const starCss = (i<=score) ? 'on' : '';
        stars.push(<span onClick={()=>onStartClick(i)} className={starCss}>&#9733;</span>);
    }

    return ( 
        <div className='rating'>
            {stars}
        </div>
    );
}
 
export default Rating;


/* un state pour le score 
générer des stars allumé et éteint
props rank affiché le score
*/