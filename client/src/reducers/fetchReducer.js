import p from 'immer';
import {ActionTypes} from '../actions/types';

export default p((state = [{url: `${process.env.PUBLIC_URL}/bot1.jpeg`, title: 'Конференция ботоводов'}], action) => {
    switch (action.type) {
        case ActionTypes.FETCH:
            state.push(action.payload);
            return state;
        default:
            return state;
    }
});
