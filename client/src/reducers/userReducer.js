import p from 'immer';
import {ActionTypes} from '../actions/types'

const INITIAL_STATE = {
    mail: 'test@test.test',
    signIn: false
};

export default p((state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_USER:
            state = action.payload;
            state.signIn = true;
            return state;
        case ActionTypes.SIGNOUT:
            state = INITIAL_STATE;
        default:
            return state;
    }
});
