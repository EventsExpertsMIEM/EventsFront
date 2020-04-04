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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
    return err;
  }
};

/**
 * @param {object} data
 * @param {string} data.email
 * @returns {function}
 */
// TODO: проверить когда заработает получение инфы про юзера

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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
  }
};
// TODO: check
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
    return err;
  }
};

/**
 * @param {number} userId
 * @param {object} user
 * @param {number} user.id
 * @param {string} user.name
 * @param {string} user.surname
 * @param {string} user.email
 * @param {string} user.position
 * @param {Array<number>} user.tags
 * @param {Array<number>} user.interests
 * @returns {function()}
 */
// TODO: check
export const changeUserInfo = (userId, user) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.CHANGE_USER_INFO;
  const {
    name,
    surname,
    email,
    position,
    tags,
    interests,
  } = user;

  const data = {
    name,
    surname,
    email,
    position,
    tags,
    interests,
  };

  const path = getPath(userId);

  try {
    const res = await axios[method](path, data);
    dispatch({
      type: ACTION.CHANGE_USER_INFO,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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

export const addEvent = (data) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.ADD_EVENT;
  const path = getPath();

  data.tags = getSelectedTagsArr(data.tags);
  try {
    const res = await axios[method](path, data);
    dispatch({
      type: ACTION.ADD_EVENT,
      payload: res,
    });
  } catch (err) {
    console.error(err);
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
  }
};

export const getEvent = (id) => async (dispatch) => {
  const { getPath, method } = ACTION_MAP.GET_EVENT;
  const path = getPath(id);

  try {
    const res = await axios[method](path);
    const action = dispatch({
      type: ACTION.GET_EVENT,
      payload: { id, ...res.data.event },
    });

    return action;
  } catch (err) {
    console.error(err);
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
    return err;
  }
};

/**
 * @param {object} event
 * @param {string} event.title
 * @param {string} event.body
 * @param {boolean} event.closed
 * @param {boolean} event.only_experts_answer
 * @param {boolean} event.only_chosen_tags
 * @param {Array<number>} event.tags
 * @returns {function}
 */

export const updateEvent = (event) => async (dispatch) => {
  const { id } = event;
  const data = {
    title: event.title,
    body: event.body,
    closed: event.closed,
    only_experts_answer: event.only_experts_answer,
    only_chosen_tags: event.only_chosen_tags,
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
  }
};

// TODO: check
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
    if (err && err.response && err.response.data
        && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
        && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
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
    if (err && err.response && err.response.data
            && err.response.data.description) {
      alert(err.response.data.description);
    }
  }
};

// ui action
export const resetComments = () => async (dispatch) => {
  dispatch({
    type: ACTION.RESET_COMMENTS,
  });
};
