import { combineReducers } from "redux";
import messageReducer from "../reducers/MessageReducer";
// custom combine reducers
const rootReducer = (state = {}, action) => {
    message: messageReducer(state.message, action)
}

export default rootReducer