
import { ActionTypes } from '../constants/actionTypes';

export function addQuestion(question){

    return {
        type : ActionTypes.ADD_QUESTION,
        payload : question
    }
}


export function updateFilter(filter){
    return {
        type : ActionTypes.UPDATE_FILTER,
        payload : filter
    }
}