import p from 'immer';
import {ActionTypes} from '../actions/types';

export default p((state = null, action) => {
    switch (action.type) {
        case ActionTypes.TEST:
            return action.payload;
        default:
            return state;
    }
});
