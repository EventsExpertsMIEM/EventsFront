import {ActionTypes} from "./types";
import axios from "axios";
import {api} from "../consts";

export const fetchEvents = () => async dispatch => {
    const res = (await axios.get(api + '/events')).data;
    return dispatch({
        type: ActionTypes.FETCH_EVENTS,
        payload: res
    })
};

export const postEvent = (event) => async dispatch => {
    const res = (await axios.post(api + '/event_create', event));
    console.log(res);
    return dispatch({
        type: ActionTypes.POST_EVENT,
    })
};
