/* eslint-disable no-param-reassign */
import p from 'immer';
import { ACTION } from '../actions/types';

const INITIAL_STATE = {
  email: 'test@test.test',
  signIn: localStorage.getItem('auth'),
};

// eslint-disable-next-line consistent-return
export default p((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION.REGISTER:
      state = action.payload;
      console.log(action.payload);
      localStorage.setItem('auth', 'true');
      state.signIn = true;
      return state;
    case ACTION.LOGOUT:
      state = INITIAL_STATE;
      delete localStorage.auth;
      state.signIn = false;
      return state;
    case ACTION.LOGIN:
      localStorage.setItem('auth', 'true');
      state.signIn = true;
      break;
    case ACTION.GET_USER_INFO:
      state = { ...action.payload };
      break;
    default:
      return state;
  }
});
