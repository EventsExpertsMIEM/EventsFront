import {ActionTypes} from "./types";
import axios from "axios";

export const fetchAction = (param) => async dispatch => {
    const res = (await axios.get(`http://jsonplaceholder.typicode.com/photos/${param}`)).data;
    return dispatch({
        type: ActionTypes.FETCH,
        payload: res
    })
};
