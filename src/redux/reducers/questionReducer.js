
import { ActionTypes } from '../constants/actionTypes';
function questionReducer(state ={filter : ""}, action) {


    switch (action.type) {
        case 'delete': {
            return state;
        }

        case ActionTypes.UPDATE_FILTER: {
            return {filter : action.payload};
        }

        default: {
            return state
        }
    }
}

export default questionReducer;