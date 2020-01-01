import {ActionTypes} from "./types";

export const testAction = (param) => {
    return {
        type: ActionTypes.TEST,
        payload: param
    }
};
