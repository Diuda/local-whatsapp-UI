import { combineReducers } from "redux";

import chat from './messages';

//root reducer combining all other reducers
export const reducers = combineReducers({
    chat
})