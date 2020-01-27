import {combineReducers} from "redux";
import fetchReducer from "./fetchReducer";
import userReducer from "./userReducer";
import {reducer as formReducer} from "redux-form";

export default combineReducers({
    events: fetchReducer,
    form: formReducer,
    user: userReducer,
});
