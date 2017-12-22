import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import classes from './Assessment.css';
import QuestionContainer from '../../components/QuestionContainer/QuestionContainer';
import Button from '../../components/Button/Button';
import Score from '../../components/Score/Score';


const assessment = [
    {
        question: "Which game is played with five players on either side?",
        options: ["Basketball", "Volleyball", "Hockey", "Football"],
        answer: "Basketball"
    },
    {
        question: "Which of the following countries is landlocked?",
        options: ["Spain", "Italy", "Switzerland", "France"],
        answer: "Switzerland"
    },
    {
        question: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
        options: ["7", "10", "12", "13"],
        answer: "10"
    },
    {
        question: "The answer is really big.",
        options: ["THE ANSWER", "Really big", "An elephant", "The data given is insufficient"],
        answer: "Really big"
    }
];


class Assessment extends Component{
    state = {
        isSubmit: false
    }

    componentDidMount(){
        this.props.onNextQuestion();
    }

    onPrevButtonHandler = () => {
        this.props.onPrevQuestion();
    }

    onNextButtonHandler = () => {
        this.props.onNextQuestion();
    }

    onSubmitQuizHandler = () => {
        this.setState({isSubmit: true});
    }

    getScore = () => {
        let score = 0;
        assessment.forEach( (questionObj, index) => {
            if(questionObj.answer === this.props.answersInfo[index]){
                score++;
            }
        });
        return score;
    }

    render(){
        let nextButton = <Button clicked={this.onNextButtonHandler}>NEXT</Button>
        if(this.props.currentIndex === 3){
            nextButton = <Button clicked={this.onSubmitQuizHandler}>SUBMIT</Button>            
        }

        let assessmentObj = (
            <div className={classes.Assessment}>
                <QuestionContainer 
                    assessment = {assessment}
                    answersInfo = {this.props.answersInfo}
                    setResultAnswer={this.props.setResultAnswer}
                    questionIndex={this.props.currentIndex}
                /> 
                <div className={classes['buttonBar']}>
                    <div className={classes.Prevbtn}>
                        { this.props.currentIndex > 0 ? <Button clicked={this.onPrevButtonHandler}>PREV</Button> : null }
                    </div>
                    <div className={classes.Nextbtn}>
                        { nextButton }
                    </div>  
                </div>
            </div>
        );

        if(this.state.isSubmit){
            const score = this.getScore();
            assessmentObj = <Score score={score}/>
        }

        return(
            <div>
                {assessmentObj}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        currentIndex: state.questions.selectedQuestion,
        answersInfo: state.answers.answersInfo
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onNextQuestion: () => dispatch(actionCreators.nextQuestion()),
        onPrevQuestion: () => dispatch(actionCreators.prevQuestion()),
        setResultAnswer: (data) => dispatch(actionCreators.setAnswer(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);