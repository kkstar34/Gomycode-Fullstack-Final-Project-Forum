
import { ActionTypes } from '../constants/actionTypes';

export function addQuestion(question){

    return {
        type : ActionTypes.ADD_QUESTION,
        payload : question
    }
}

export function getSingleQuestion(question){
    
    return {
        type : ActionTypes.GET_SINGLE_QUESTION,
        payload : question
    }
}

export function updateFilter(filter){
    return {
        type : ActionTypes.UPDATE_FILTER,
        payload : filter
    }
}

export function addComment(comment){
    return {
        type : ActionTypes.ADD_COMMENT,
        payload : comment
    }
}