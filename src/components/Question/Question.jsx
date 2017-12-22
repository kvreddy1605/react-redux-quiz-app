import React from 'react';
import classes from './Question.css';

const question = (props) => {
    return(
        <div className={classes.Question}>
            <p>{props.question}</p>
        </div>
    );

}

export default question;