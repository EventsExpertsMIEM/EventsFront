import axios from 'axios';
import { ACTION, ACTION_MAP } from './types';
import { api } from '../consts';


export const login = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.LOGIN;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.LOGIN,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.LOGOUT;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.LOGOUT,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const register = (data =  {
  email: 'test@test.test',
  name: 'TEST',
  surname: 'TESTOV',
  password: 'test',
}) => async (dispatch) => {
  const { path, method } = ACTION_MAP.REGISTER;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.REGISTER,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const confirmUser = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.CONFIRM;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.CONFIRM,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteUser = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.DELETE;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.DELETE,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const closeAllSessions = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.CLOSE_ALL_SESSIONS;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.CLOSE_ALL_SESSIONS,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const resetPassword = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.RESET_PASSWORD;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.RESET_PASSWORD,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const changePassword = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.CHANGE_PASSWORD;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.CHANGE_PASSWORD,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const banUser = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.BAN_USER;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.BAN_USER,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const changeRole = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.CHANGE_ROLE;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.CHANGE_ROLE,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getCurrentUserInfo = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.GET_CURRENT_USER_INFO;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.GET_CURRENT_USER_INFO,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getUserInfo = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.GET_USER_INFO;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.GET_USER_INFO,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const changeUserInfo = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.CHANGE_USER_INFO;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.CHANGE_USER_INFO,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getUserEvents = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.GET_USER_EVENTS;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.GET_USER_EVENTS,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getUserEventsInfo = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.GET_USER_EVENTS_INFO;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.GET_USER_EVENTS_INFO,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getAllUsers = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.GET_ALL_USERS;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.GET_ALL_USERS,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const addEvent = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.ADD_EVENT;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.ADD_EVENT,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateEvent = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.UPDATE_EVENT;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.UPDATE_EVENT,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getEventInfo = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.GET_EVENT_INFO;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.GET_EVENT_INFO,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteElement = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.DELETE_EVENT;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.DELETE_EVENT,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const status = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.STATUS;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.STATUS,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getAllEvents = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.GET_ALL_EVENTS;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.GET_ALL_EVENTS,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const joinEvent0 = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.JOIN_EVENT;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.JOIN_EVENT,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getPresenters = () => async (dispatch) => {
  const { path, method } = ACTION_MAP.GET_PRESENTERS;
  try {
    const res = await axios[method](`${api}${path}`);

    dispatch({
      type: ACTION.GET_PRESENTERS,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
};


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
    type: ACTION.GET_ALL_EVENTS,
    payload: res,
  });
};

export const fetchEventData = (id) => async (dispatch) => {
  const res = (await axios.get(`${api}/event/${id}`, { withCredentials: true })).data;
  return dispatch({
    type: ACTION.GET_EVENT_INFO,
    payload: { id, ...res },
  });
};

export const postEvent = (event) => async (dispatch) => {
  // eslint-disable-next-line no-param-reassign
  console.log(event);

  try {
    const res = await axios.post(`${api}/event`, event);
    console.log(res);
    dispatch({
      type: ACTION.ADD_EVENT,
    });
  } catch (error) {
    console.dir(error);
    alert(JSON.stringify(error.message, null, 4));
  }
};

export const register0 = (registerData) => async (dispatch) => {
  console.log(registerData);
  // eslint-disable-next-line no-param-reassign
  delete registerData.repeatPassword;
  try {
    const res = await axios.post(`${api}/register`, registerData);
    if (res.status === 200) {
      alert(`User ${registerData.name} ${registerData.surname} registered successfully`);

      dispatch({
        type: ACTION.REGISTER,
        payload: registerData,
      });
    }
  } catch (error) {
    console.dir(error);
    alert(JSON.stringify(error.message, null, 4));
  }
};

export const login0 = (loginData) => async (dispatch) => {
  console.log(loginData);
  try {
    const res = await axios.post(`${api}/login`, loginData);
    if (res.status === 200) {
      alert(`User ${loginData.email} logged in successfully`);

      dispatch({
        type: ACTION.LOGIN,
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
      type: ACTION.LOGOUT,
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
    type: ACTION.ADD_EVENT,
  });
};

export const getUserInfo = () => async (dispatch) => {
  const res = await axios.post(`${api}/user`, { withCredentials: true });
  // TODO: debug
  console.log(res);
  return dispatch({
    type: ACTION.GET_CURRENT_USER_INFO,
    payload: res,
  });
};
