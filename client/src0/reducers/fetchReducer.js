/* eslint-disable no-param-reassign */
import p from 'immer';
import { ACTION } from '../actions/types';

const INITIAL_STATE = {};

export default p((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION.GET_ALL_EVENTS:
      state = Object.entries(action.payload).reduce((newState, [, value]) => {
        newState[value.id] = value;
        return newState;
      }, state);
      return state;
    case ACTION.GET_EVENT_INFO:
      // eslint-disable-next-line no-case-declarations
      const currentId = action.payload.id;
      state[currentId] = Object.entries(action.payload).reduce((newState, [key, value]) => {
        newState[key] = value;
        return newState;
      }, state[currentId]);
      return state;
    default:
      return state;
  }
});
