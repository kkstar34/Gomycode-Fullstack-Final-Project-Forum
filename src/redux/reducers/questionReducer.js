
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
                state.comments.push(action.payload);
            return {...state} ;
        }

        case ActionTypes.CONNEXION_REFUSED :{
           
        return {...state, 'error' : action.payload}; 
        
        }

        case ActionTypes.CLEAN_ERROR :{
           
            return {...state, 'error' : ""}; 
            
            }

        case ActionTypes.CLEAN_FILTER :{
    
            return {...state, 'filter' : action.payload}; 
            
            }

        default: {
            return state
        }
    }
}

export default questionReducer;