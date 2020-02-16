/* eslint-disable no-param-reassign */
import p from 'immer';
import { ActionTypes } from '../actions/types';

const INITIAL_STATE = {};

export default p((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_EVENTS:
      state = Object.entries(action.payload).reduce((newState, [, value]) => {
        newState[value.id] = value;
        return newState;
      }, state);
      return state;
    case ActionTypes.GET_DETAILED_EVENT:
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
