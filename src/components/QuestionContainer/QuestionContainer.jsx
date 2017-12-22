import React from 'react';
import Question from '../Question/Question';
import Option from '../Option/Option';
import classes from './QuestionContainer.css';


const questionContainer = (props) => {
    let questionObj = null;
    const setAnswer = (option)=> {
        const data = {
            questionId: props.questionIndex,
            answer: option
        }
        props.setResultAnswer(data)
    }
    if(props.questionIndex !== -1){
        const { question, options } = props.assessment[props.questionIndex];
        const selectedAnswer = props.answersInfo[props.questionIndex]
        questionObj = (
            <div>
                <Question question={question}/>
                { options.map( option => {
                    return <Option key={option} selectedAnswer={selectedAnswer} option={option} setAnswer={setAnswer}/>
                }) }
            </div>
        );
    }
    return(
        <div className={classes.QuestionContainer}>
            {questionObj}
        </div>
    );

}

export default questionContainer;