import * as actionTypes from './actionTypes';

export const setAnswer = (payload) => {
    return {
        type: actionTypes.SET_ANSWER,
        ...payload
    }
}
