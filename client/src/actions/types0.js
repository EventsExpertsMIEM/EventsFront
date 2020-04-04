// eslint-disable-next-line import/prefer-default-export
// export const ActionTypes = {
//   FETCH_EVENTS: 'FETCH_EVENTS',
//   POST_EVENT: 'POST_EVENT',
//   REGISTER_USER: 'REGISTER_USER',
//   GET_USER_INFO: 'GET_USER_INFO',
//   SIGNOUT: 'SIGNOUT',
//   JOIN_EVENT: 'JOIN_EVENT',
//   GET_DETAILED_EVENT: 'GET_DETAILED_EVENT',
//   LOGIN_USER: 'LOGIN_USER',
// };

export const ACTION = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER',
  CONFIRM: 'CONFIRM',
  DELETE: 'DELETE',
  CLOSE_ALL_SESSIONS: 'CLOSE_ALL_SESSIONS',
  RESET_PASSWORD: 'RESET_PASSWORD',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  BAN_USER: 'BAN_USER',
  CHANGE_ROLE: 'CHANGE_ROLE',
  GET_CURRENT_USER_INFO: 'GET_CURRENT_USER_INFO',
  GET_USER_INFO: 'GET_USER_INFO',
  CHANGE_USER_INFO: 'CHANGE_USER_INFO',
  GET_USER_EVENTS: 'GET_USER_EVENTS',
  GET_USER_EVENTS_INFO: 'GET_USER_EVENTS_INFO',
  GET_ALL_USERS: 'GET_ALL_USERS',
  ADD_EVENT: 'ADD_EVENT',
  UPDATE_EVENT: 'UPDATE_EVENT',
  GET_EVENT_INFO: 'GET_EVENT_INFO',
  DELETE_EVENT: 'DELETE_EVENT',
  STATUS: 'STATUS',
  GET_ALL_EVENTS: 'GET_ALL_EVENTS',
  JOIN_EVENT: 'JOIN_EVENT',
  GET_PRESENTERS: 'GET_PRESENTERS',
};

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const api = '/';

export const ACTION_MAP = {
  [ACTION.LOGIN]: {
    getPath: () => `${api}login`,
    method: METHODS.POST,
  },
  [ACTION.LOGOUT]: {
    getPath: () => `${api}logout`,
    method: METHODS.GET,
    loginRequired: true,
  },
  [ACTION.REGISTER]: {
    getPath: () => `${api}register`,
    method: METHODS.POST,
  },
  // TODO
  [ACTION.CONFIRM]: {
    getPath: (link) => `${api}confirm/${link}`,
    method: METHODS.GET,
  },
  [ACTION.CHANGE_PASSWORD]: {
    getPath: () => `${api}change_password`,
    method: METHODS.POST,
    loginRequired: true,
  },
  [ACTION.RESET_PASSWORD]: {
    getPath: () => `${api}reset_password`,
    method: METHODS.POST,
  },
  [ACTION.CLOSE_ALL_SESSIONS]: {
    getPath: () => `${api}close_all_sessions`,
    method: METHODS.POST,
    loginRequired: true,
  },
  [ACTION.DELETE]: {
    getPath: () => `${api}delete`,
    method: METHODS.POST,
    loginRequired: true,
  },
  [ACTION.STATUS]: {
    getPath: () => `${api}status`,
    method: METHODS.GET,
    loginRequired: true,
  },
  [ACTION.BAN_USER]: {
    getPath: (id) => `${api}user/${id}/ban`,
    method: METHODS.GET,
    loginRequired: true,
    rightsRequired: true,
  },
  [ACTION.CHANGE_ROLE]: {
    getPath: (id, role) => `${api}user/${id}/role/${role}`,
    method: METHODS.GET,
    loginRequired: true,
    rightsRequired: true,
  },
  [ACTION.GET_CURRENT_USER_INFO]: {
    getPath: (id) => `${api}user/${id}`,
    method: METHODS.GET,
  },
  [ACTION.CHANGE_USER_INFO]: {
    getPath: (id) => `${api}user/${id}`,
    method: METHODS.PUT,
  },
  [ACTION.GET_USER_EVENTS]: {
    getPath: (role) => `${api}user/events/${role}`,
    method: METHODS.GET,
    loginRequired: true,
  },
  [ACTION.GET_ALL_USERS]: {
    getPath: () => `${api}user/all`,
    method: METHODS.GET,
    loginRequired: true,
    rightsRequired: true,
  },
  [ACTION.GET_USER_INFO]: {
    getPath: () => `${api}user`,
    method: METHODS.GET,
    loginRequired: true,
    rightsRequired: true,
  },
  [ACTION.GET_USER_EVENTS_INFO]: {
    getPath: (id, role) => `${api}user/${id}/events/${role}`,
    method: METHODS.GET,
  },
  [ACTION.ADD_EVENT]: {
    getPath: () => `${api}event`,
    method: METHODS.POST,
    loginRequired: true,
  },
  [ACTION.UPDATE_EVENT]: {
    getPath: () => `${api}question`,
    method: METHODS.PUT,
    rightsRequired: true,
    loginRequired: true,
  },
  [ACTION.GET_EVENT_INFO]: {
    getPath: (id) => `${api}event/${id}`,
    method: METHODS.GET,
  },
  [ACTION.DELETE_EVENT]: {
    getPath: (id) => `${api}event/${id}/delete`,
    method: METHODS.DELETE,
    rightsRequired: true,
    loginRequired: true,
  },
  [ACTION.GET_ALL_EVENTS]: {
    getPath: () => `${api}event/all`,
    method: METHODS.GET,
  },
  [ACTION.JOIN_EVENT]: {
    getPath: (id) => `${api}event/${id}/join`,
    method: METHODS.POST,
    loginRequired: true,
  },
  [ACTION.GET_PRESENTERS]: {
    getPath: (id) => `${api}event/${id}/presenters`,
    method: METHODS.GET,
  },
};
