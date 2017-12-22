import * as actionTypes from './actionTypes';

export const nextQuestion = () => {
    return {
        type: actionTypes.NEXT_QUESTION
    }
}

export const prevQuestion = () => {
    return {
        type: actionTypes.PREV_QUESTION
    }
}

