
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


export function connexionRefused(){
    return {
        type : ActionTypes.CONNEXION_REFUSED,
        payload : "Veuillez vous connecter avant d'acceder à cette page svp!"
    }
}

export function cleanError(){
    return {
        type : ActionTypes.CLEAN_ERROR,
        payload : ""
    }
}


export function cleanFilter(){
    return {
        type : ActionTypes.CLEAN_FILTER,
        payload : ""
    }
}