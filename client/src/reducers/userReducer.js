/* eslint-disable no-param-reassign, no-case-declarations */
import p from 'immer';
import { ACTION } from '../actions/types';

const INITIAL_STATE = {
  isLoggedIn: false,
};

export default p((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION.REGISTER:
      return state;
    case ACTION.LOGOUT:
      state = INITIAL_STATE;
      return state;
    case ACTION.LOGIN:
      state.isLoggedIn = true;
      return state;
    case ACTION.GET_USER_LOGIN_STATUS: {
      const { is_logged_in } = action.payload;

      state.isLoggedIn = is_logged_in;

      if (!is_logged_in) {
        return state;
      }

      const {
        email,
        id,
        name,
        service_status,
        surname,
      } = action.payload.info;

      state.isLoggedIn = is_logged_in;
      if (state) {
        state.email = email;
      }
      state.id = id;
      state.name = name;
      state.service_status = service_status;
      state.surname = surname;
      return state;
    }
    case ACTION.GET_USER_INFO: {
      const {
        bio,
        birth,
        country,
        email,
        name,
        organization,
        phone,
        position,
        service_status,
        sex,
        surname,
        town,
      } = action.payload;

      const { isLoggedIn } = state;

      const userState = {
        bio,
        birth,
        country,
        email,
        name,
        organization,
        phone,
        position,
        service_status,
        sex,
        surname,
        town,
      };

      state = userState;
      state.isLoggedIn = isLoggedIn;

      return state;
    }
    default:
      return state;
  }
});
