import { combineReducers } from "redux";
import userManagerReducer from "./userManagerReducer";


const rootReducer = combineReducers({
    userManager: userManagerReducer
});

export default rootReducer;