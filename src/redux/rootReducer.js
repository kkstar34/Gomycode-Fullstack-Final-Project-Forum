import { combineReducers } from "redux";
import questionReducer from './reducers/questionReducer';


export const rootReducer = combineReducers({
    questions : questionReducer
})