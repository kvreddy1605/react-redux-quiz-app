import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
    answersInfo: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_ANSWER:
            return {
                ...state,
                answersInfo: {
                    ...state.answersInfo,
                    [action.questionId]:action.answer
                } 
            }
        default: 
            return state;
    }
}

export default reducer;