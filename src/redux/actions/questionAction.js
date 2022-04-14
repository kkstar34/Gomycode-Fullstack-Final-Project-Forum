
import { ActionTypes } from '../constants/actionTypes';

export function addQuestion(question){

    return {
        action : ActionTypes.ADD_QUESTION,
        payload : question
    }
}