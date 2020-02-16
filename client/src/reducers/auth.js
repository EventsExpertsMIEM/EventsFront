/* eslint-disable no-param-reassign */
import p from 'immer';
import { ActionTypes } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
};

export default p((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      state.authenticated = action.payload;
      return state;
    case ActionTypes.AUTH_ERROR:
      state.errorMessage = action.payload;
      return state;
    default:
      return state;
  }
});
