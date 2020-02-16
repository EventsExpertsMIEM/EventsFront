import axios from 'axios';
import { ActionTypes } from './types';
import { api } from '../consts';

export const fetchEvents = () => async (dispatch) => {
  const res = (await axios.get(`${api}/events`)).data;
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
  event.mail = 'root_mail';
  console.log(event);

  try {
    const res = await axios.post(`${api}/create_event`, event);
    console.log(res);
  } catch (error) {
    console.dir(error);
    alert(JSON.stringify(error.message, null, 4));
  }
  return dispatch({
    type: ActionTypes.POST_EVENT,
  });
};

export const register = (registerData) => async (dispatch) => {
  console.log(registerData);
  // eslint-disable-next-line no-param-reassign
  delete registerData.repeatPassword;
  try {
    const res = await axios.post(`${api}/register`, registerData);
    console.log(res);
    if (res.status === 200) {
      alert(`User ${registerData.name} ${registerData.surname} registered successfully`);
    }
  } catch (error) {
    console.dir(error);
    alert(JSON.stringify(error.message, null, 4));
  }
  return dispatch({
    type: ActionTypes.REGISTER_USER,
    payload: registerData,
  });
};

export const login = (loginData) => async (dispatch) => {
  console.log(loginData);
  try {
    const res = await axios.post(`${api}/login`, loginData);
    console.log(res);
    if (res.status === 200) {
      alert(`User ${loginData.mail} logged in successfully`);
    }
  } catch (error) {
    console.dir(error);
    alert(JSON.stringify(error.message, null, 4));
  }
  return dispatch({
    type: ActionTypes.LOGIN_USER,
    payload: loginData,
  });
};

export const signOut = () => async (dispatch) => {
  try {
    await axios.post(`${api}/logout`);
  } catch (error) {
    console.dir(error);
    alert(JSON.stringify(error.message, null, 4));
  }
  return dispatch({
    type: ActionTypes.SIGNOUT,
  });
};

// eslint-disable-next-line camelcase
export const joinEvent = ({ mail, event_id }) => async (dispatch) => {
  try {
    const res = await axios.post(`${api}/join`, { mail, event_id });
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