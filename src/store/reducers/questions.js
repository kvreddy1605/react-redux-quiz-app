import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
    selectedQuestion: -1,
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.NEXT_QUESTION:
            return {
                ...state,
                selectedQuestion: state.selectedQuestion + 1
            }
        case actionTypes.PREV_QUESTION:
            return {
                ...state,
                selectedQuestion: state.selectedQuestion - 1
            }
        default: 
            return state;
    }
}

export default reducer;