/* eslint-disable no-param-reassign, max-len */
import axios from 'axios';
import { ACTION, ACTION_MAP } from './types';
import { getSelectedTagsArr } from '../helpers/helpers';

export const login = (data) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.LOGIN;
  const path = getPath();
  try {
    const res = await axios[method](path, data);
    dispatch({
      type: ACTION.LOGIN,
      payload: res,
    });
    return res;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
    return err;
  }
};

export const logout = () => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.LOGOUT;
  const path = getPath();
  try {
    dispatch({
      type: ACTION.LOGOUT,
    });
    await axios[method](path);
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

/**
 * @param {object} data
 * @param {string} data.email
 * @param {string} data.name
 * @param {string} data.surname
 * @param {string} data.password,
 * @param {string} data.repeatPassword,
 * @returns {function}
 */

export const register = (data) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.REGISTER;
  const path = getPath();

  const registerData = { ...data };
  delete registerData.repeatPassword;

  try {
    const res = await axios[method](path, registerData);
    dispatch({
      type: ACTION.REGISTER,
      payload: res,
    });
    return res;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
    return err;
  }
};
// TODO: unused
export const confirmUser = () => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.CONFIRM;
  const path = getPath();
  try {
    await axios[method](path);
    dispatch({
      type: ACTION.CONFIRM,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const deleteUser = (password) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.DELETE;
  const path = getPath();
  try {
    const res = await axios[method](path, { password });
    dispatch({
      type: ACTION.DELETE,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
    return err;
  }
};

export const closeAllSessions = (password) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.CLOSE_ALL_SESSIONS;
  const path = getPath();
  try {
    const res = await axios[method](path, { password });

    dispatch({
      type: ACTION.CLOSE_ALL_SESSIONS,
    });

    return res.data;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
    return err;
  }
};

/**
 * @param {object} data
 * @param {string} data.email
 * @returns {function}
 */
export const resetPassword = ({ email }) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.RESET_PASSWORD;
  const path = getPath();
  try {
    const res = await axios[method](path, { email });
    dispatch({
      type: ACTION.RESET_PASSWORD,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
    return err;
  }
};

export const changePassword = (old_password, new_password) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.CHANGE_PASSWORD;
  const path = getPath();
  try {
    const res = await axios[method](path, { old_password, new_password });
    dispatch({
      type: ACTION.CHANGE_PASSWORD,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
    return err;
  }
};

export const banUser = (id) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.BAN_USER;
  const path = getPath(id);
  try {
    const res = await axios[method](path, id);
    dispatch({
      type: ACTION.BAN_USER,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
    return err;
  }
};

export const changeRole = (id, role) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.CHANGE_ROLE;
  const path = getPath(id, role);

  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.CHANGE_ROLE,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const getUserLoginStatus = () => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.GET_USER_LOGIN_STATUS;
  const path = getPath();
  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.GET_USER_LOGIN_STATUS,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
    return err;
  }
};


export const getUserInfo = (id) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.GET_USER_INFO;
  const path = getPath(id);
  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.GET_USER_INFO,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
    return err;
  }
};

export const getCurrentUserInfo = () => getUserInfo();

export const getAllUsers = () => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.GET_ALL_USERS;
  const path = getPath();
  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.GET_ALL_USERS,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
    return err;
  }
};

/**
 * @param {object} user
 * @param {string} user.name
 * @param {string} user.surname
 * @param {string} user.phone
 * @param {string} user.organization
 * @param {string} user.position
 * @param {string} user.country
 * @param {string} user.town
 * @param {string} user.sex
 * @param {string} user.birth
 * @param {string} user.bio
 * @returns {function}
 */
export const changeUserInfo = (user) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.CHANGE_USER_INFO;
  const path = getPath();

  try {
    const res = await axios[method](path, user);
    dispatch({
      type: ACTION.CHANGE_USER_INFO,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};
// TODO: check
export const getUserEvents = (id, role) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.GET_USER_EVENTS;
  const path = getPath(id, role);
  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.GET_USER_EVENTS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};


export const getAllEvents = () => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.GET_ALL_EVENTS;
  const path = getPath();
  try {
    const res = (await axios[method](path)).data;
    dispatch({
      type: ACTION.GET_ALL_EVENTS,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

/**
 *
 * @param {object} event
 * @params {string} event.name - название мероприятия
 * @params {string} event.sm_description - краткое описание мероприятия
 * @params {string} event.description - полное описание мероприятия
 * @params {string} event.start_date - дата начала мероприятия в iso формате
 * @params {string} event.end_date - дата окончания мероприятия в iso формате (ключ может отсутствовать, если мероприятие проводится один день)
 * @params {string} event.start_time - время начала мероприятия в iso формате (может остуствовать, если мероприятие проводится несколько дней)
 * @params {string} event.location - место проведения мероприятия
 * @params {string} event.site_link - ссылка на собственный сайт мероприятия
 * @params {string} event.additional_info
 * @returns {function}
 */

// eslint-disable-next-line consistent-return
export const addEvent = (data) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.ADD_EVENT;
  const path = getPath();

  data.tags = getSelectedTagsArr(data.tags);
  try {
    const res = await axios[method](path, data);
    dispatch({
      type: ACTION.ADD_EVENT,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const getEvent = (id) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.GET_EVENT;
  const path = getPath(id);

  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.GET_EVENT,
      payload: { id, ...res.data.event },
    });

    return res.data;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
    return err;
  }
};

/**
 * @param {object} event
 * @param {string} event.name
 * @param {string} event.sm_description
 * @param {string} event.description
 * @param {string} event.start_date
 * @param {string} event.end_date
 * @param {string} event.start_time
 * @param {string} event.location
 * @param {string} event.site_link
 * @param {string} event.additional_info
 * @param {string} event.guests_info
 */

export const updateEvent = (event) => async (dispatch) => {
  const { id } = event;
  const data = {
    name: event.name,
    sm_description: event.sm_description,
    description: event.description,
    start_date: event.start_date,
    end_date: event.end_date,
    start_time: event.start_time,
    location: event.location,
    site_link: event.site_link,
    additional_info: event.additional_info,
    guests_info: event.guests_info,
    // tags: getSelectedTagsArr(event.tags),
  };

  const { getPath, method } = ACTION_MAP.UPDATE_EVENT;
  const path = getPath(id);
  try {
    const res = await axios[method](path, data);
    dispatch({
      type: ACTION.UPDATE_EVENT,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.DELETE_EVENT;
  const path = getPath(id);
  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.DELETE_EVENT,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const joinEvent = (id) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.JOIN_EVENT;
  const path = getPath(id);
  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.JOIN_EVENT,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const getPresenters = (id) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.GET_PRESENTERS;
  const path = getPath(id);
  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.GET_PRESENTERS,
      payload: { id, ...res.data },
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const getAllTags = () => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.GET_ALL_TAGS;
  const path = getPath();
  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.GET_ALL_TAGS,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
    return err;
  }
};

export const createTag = (name) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.CREATE_TAG;
  const path = getPath(name);
  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.CREATE_TAG,
      payload: res.data,
    });
    // eslint-disable-next-line no-empty
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

// TODO: unused
export const getTagInfo = (id) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.GET_TAG_INFO;
  const path = getPath(id);
  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.GET_TAG_INFO,
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
    return err;
  }
};

export const changeTagName = (oldName, newName) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.CHANGE_TAG_NAME;
  const path = getPath(oldName, newName);
  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.CHANGE_TAG_NAME,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const deleteTag = (id) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.DELETE_TAG;
  const path = getPath(id);

  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.DELETE_TAG,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const addManagerToEvent = (eventId, email) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.ADD_MANAGER_TO_EVENT;
  const path = getPath(eventId);

  try {
    const res = await axios[method](path, email);
    dispatch({
      type: ACTION.ADD_MANAGER_TO_EVENT,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const deleteManagerFromEvent = (eventId) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.DELETE_MANAGER_FROM_EVENT;
  const path = getPath(eventId);

  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.DELETE_MANAGER_FROM_EVENT,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

/**
 * @param {object} task
 * @param {number} task.id
 *  @param {string} task.deadline
 *  @param {string} task.name
 *   @param {string} task.description
 * @returns {function}
 */
export const createTask = (task) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.CREATE_TASK;
  const path = getPath(task.id);

  const data = {
    deadline: task.deadline,
    name: task.name,
    description: task.description,
  };

  try {
    const res = await axios[method](path, data);
    dispatch({
      type: ACTION.CREATE_TASK,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const deleteTask = (eventId, taskId) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.DELETE_TASK;
  const path = getPath(eventId, taskId);

  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.DELETE_TASK,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const moveTask = (eventId, taskId, status) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.MOVE_TASK;
  const path = getPath(eventId, taskId, status);

  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.MOVE_TASK,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const getAllTasks = (id) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.GET_ALL_TASKS;
  const path = getPath(id);

  try {
    const res = await axios[method](path);
    dispatch({
      type: ACTION.GET_ALL_TASKS,
      payload: { id, ...res.data },
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};

export const updateTask = (eventId, taskId, task) => async (dispatch) => {
  const { deadline, name, description } = task;
  const data = { deadline, name, description };
  const { getPath, method } = ACTION_MAP.UPDATE_TASK;
  const path = getPath(eventId, taskId);

  try {
    const res = await axios[method](path, data);
    dispatch({
      type: ACTION.UPDATE_TASK,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    alert(JSON.stringify(err, null, 4));
  }
};
