import React from 'react';
import classes from './Option.css';

const option = (props) => {
    const { selectedAnswer, option, setAnswer } = props

    return(
        <div className={(selectedAnswer === option)? classes.OptionSelected : classes['Option']}  
            onClick={() => setAnswer(option)}>
            {option}
        </div>
    );
}

export default option;