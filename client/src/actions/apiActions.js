import axios from 'axios';
import { ActionTypes } from './types';
import { api } from '../consts';

axios.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (err) => Promise.reject(err),
);

export const fetchEvents = () => async (dispatch) => {
  const res = (await axios.get(`${api}/event/all`)).data;
  return dispatch({
    type: ActionTypes.FETCH_EVENTS,
    payload: res,
  });
};

export const fetchEventData = (id) => async (dispatch) => {
  const res = (await axios.get(`${api}/event/${id}`)).data;
  return dispatch({
    type: ActionTypes.GET_DETAILED_EVENT,
    payload: { id, ...res },
  });
};

export const postEvent = (event) => async (dispatch) => {
  // eslint-disable-next-line no-param-reassign
  console.log(event);

  try {
    const res = await axios.post(`${api}/event/`, event);
    console.log(res);
    dispatch({
      type: ActionTypes.POST_EVENT,
    });
  } catch (error) {
    console.dir(error);
    alert(JSON.stringify(error.message, null, 4));
  }
};

export const register = (registerData) => async (dispatch) => {
  console.log(registerData);
  // eslint-disable-next-line no-param-reassign
  delete registerData.repeatPassword;
  try {
    const res = await axios.post(`${api}/register`, registerData);
    if (res.status === 200) {
      alert(`User ${registerData.name} ${registerData.surname} registered successfully`);

      dispatch({
        type: ActionTypes.REGISTER_USER,
        payload: registerData,
      });
    }
  } catch (error) {
    console.dir(error);
    alert(JSON.stringify(error.message, null, 4));
  }
};

export const login = (loginData) => async (dispatch) => {
  console.log(loginData);
  try {
    const res = await axios.post(`${api}/login`, loginData);
    if (res.status === 200) {
      alert(`User ${loginData.email} logged in successfully`);

      dispatch({
        type: ActionTypes.LOGIN_USER,
        payload: loginData,
      });
    }
  } catch (error) {
    console.log(error);
    alert(JSON.stringify(error, null, 4));
  }
};

export const signOut = () => async (dispatch) => {
  try {
    delete localStorage.auth;
    await axios.post(`${api}/logout`);

    dispatch({
      type: ActionTypes.SIGNOUT,
    });
  } catch (error) {
    console.dir(error);
    alert(JSON.stringify(error.message, null, 4));
  }
};

// eslint-disable-next-line camelcase
export const joinEvent = ({ email, event_id }) => async (dispatch) => {
  try {
    const res = await axios.post(`${api}/join`, { email, event_id });
    console.log(res);
    alert('Вы успешно присоединились к мероприятию!');
  } catch (error) {
    console.error((error.message));
    alert(JSON.stringify(error.message, null, 4));
  }
  return dispatch({
    type: ActionTypes.POST_EVENT,
  });
};

export const getUserInfo = () => async (dispatch) => {
  const res = await axios.post(`${api}/user`);
  // TODO: debug
  console.log(res);
  return dispatch({
    type: ActionTypes.GET_USER_INFO,
    payload: res,
  });
};
