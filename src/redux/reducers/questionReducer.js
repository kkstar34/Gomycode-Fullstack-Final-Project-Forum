
import { ActionTypes } from '../constants/actionTypes';
function questionReducer(state ={filter : "", comments : []}, action) {


    switch (action.type) {
        case 'delete': {
            return state;
        }

        case ActionTypes.UPDATE_FILTER: {
            return {filter : action.payload};
        }


        case ActionTypes.GET_SINGLE_QUESTION: {
            return {...state, ...action.payload};
        }
        case ActionTypes.ADD_COMMENT :{
            if(state.comments){
                state.comments.push(action.payload);
            }
            return {...state, ...action.payload} ;
        }

        default: {
            return state
        }
    }
}

export default questionReducer;