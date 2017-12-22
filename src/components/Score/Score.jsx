import React from 'react';
import classes from './Score.css';

const score = (props) => {
    
    return(
        <div className={classes.Score}>
           <p>You have Answered <span>{ props.score }</span> out of 4 Questions Correctly</p>.
        </div>
    );
}

export default score;