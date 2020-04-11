// eslint-disable-next-line import/prefer-default-export
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
  GET_USER_INFO: 'GET_USER_INFO',
  GET_ALL_USERS: 'GET_ALL_USERS',
  CHANGE_USER_INFO: 'CHANGE_USER_INFO',
  GET_USER_LOGIN_STATUS: 'GET_USER_LOGIN_STATUS',
  GET_USER_EVENTS: 'GET_USER_EVENTS',
  GET_ALL_EVENTS: 'GET_ALL_EVENTS',
  ADD_EVENT: 'ADD_EVENT',
  GET_EVENT: 'GET_EVENT',
  UPDATE_EVENT: 'UPDATE_EVENT',
  DELETE_EVENT: 'DELETE_EVENT',
  GET_ALL_TAGS: 'GET_ALL_TAGS',
  CREATE_TAG: 'CREATE_TAG',
  GET_TAG_INFO: 'GET_TAG_INFO',
  CHANGE_TAG_NAME: 'CHANGE_TAG_NAME',
  DELETE_TAG: 'DELETE_TAG',
  JOIN_EVENT: 'JOIN_EVENT',
  GET_PRESENTERS: 'GET_PRESENTERS',
  ADD_MANAGER_TO_EVENT: 'ADD_MANAGER_TO_EVENT',
  DELETE_MANAGER_FROM_EVENT: 'DELETE_MANAGER_FROM_EVENT',
  CREATE_TASK: 'CREATE_TASK',
  DELETE_TASK: 'DELETE_TASK',
  MOVE_TASK: 'MOVE_TASK',
  GET_ALL_TASKS: 'GET_ALL_TASKS',
  UPDATE_TASK: 'UPDATE_TASK',
  // ui
  RESET_COMMENTS: 'RESET_COMMENTS',
};

const METHODS = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
};

export const ROLES = {
  USER: 'user',
  MODERATOR: 'moderator',
  ADMIN: 'admin',
  SUPERADMIN: 'superadmin',
};

export const TASK_STATUSES = {
  TODO: 'todo',
  INPROCESS: 'inprocess',
  WAITING: 'waiting',
  DONE: 'done',
};

const Api = {
  expertsApi: 'http://192.168.255.100:8080/',
  // eventsApi: 'http://192.168.255.99:45000/api/',
  // eventsApi: 'http://192.168.255.100:80/api/',
  // eventsApi: 'http://92.242.58.124:30080/api/',
  stub: '/',
};

const api = Api.stub;

export const ACTION_MAP = {
  [ACTION.LOGIN]: {
    getPath: () => `${api}login`,
    method: METHODS.POST,
  },
  [ACTION.LOGOUT]: {
    getPath: () => `${api}logout`,
    method: METHODS.GET,
  },
  [ACTION.REGISTER]: {
    getPath: () => `${api}register`,
    method: METHODS.POST,
  },
  [ACTION.CONFIRM]: {
    getPath: () => `${api}confirm`,
    method: METHODS.POST,
  },
  [ACTION.DELETE]: {
    getPath: () => `${api}delete`,
    method: METHODS.POST,
  },
  [ACTION.CLOSE_ALL_SESSIONS]: {
    getPath: () => `${api}close_all_sessions`,
    method: METHODS.POST,
  },
  [ACTION.RESET_PASSWORD]: {
    getPath: () => `${api}reset_password`,
    method: METHODS.POST,
  },
  [ACTION.CHANGE_PASSWORD]: {
    getPath: () => `${api}change_password`,
    method: METHODS.POST,
  },
  [ACTION.BAN_USER]: {
    getPath: (id) => `${api}user/${id}/ban`,
    method: METHODS.GET,
  },
  [ACTION.CHANGE_ROLE]: {
    getPath: (id, role) => `${api}user/${id}/role/${role}`,
    method: METHODS.GET,
  },
  [ACTION.GET_USER_LOGIN_STATUS]: {
    getPath: () => `${api}status`,
    method: METHODS.GET,
  },
  [ACTION.GET_USER_INFO]: {
    getPath: (id) => `${api}user/${id || ''}`,
    method: METHODS.GET,
  },
  [ACTION.GET_ALL_USERS]: {
    getPath: () => `${api}user/all`,
    method: METHODS.GET,
  },
  [ACTION.CHANGE_USER_INFO]: {
    getPath: () => `${api}user/`,
    method: METHODS.PUT,
  },
  [ACTION.GET_USER_EVENTS]: {
    getPath: (id, role) => `${api}${id}/events/${role}`,
    method: METHODS.GET,
  },
  [ACTION.GET_ALL_EVENTS]: {
    getPath: () => `${api}event/all`,
    method: METHODS.GET,
  },
  [ACTION.ADD_EVENT]: {
    getPath: () => `${api}event`,
    method: METHODS.POST,
  },
  [ACTION.GET_EVENT]: {
    getPath: (id) => `${api}event/${id}`,
    method: METHODS.GET,
  },
  [ACTION.UPDATE_EVENT]: {
    getPath: (id) => `${api}event/${id}`,
    method: METHODS.PUT,
  },
  [ACTION.DELETE_EVENT]: {
    getPath: (id) => `${api}/${id}/delete`,
    method: METHODS.GET,
  },
  [ACTION.GET_ALL_TAGS]: {
    getPath: () => `${api}tag/all`,
    method: METHODS.GET,
  },
  [ACTION.CREATE_TAG]: {
    getPath: (name) => `${api}tag/?name=${name}`,
    method: METHODS.GET,
  },
  [ACTION.GET_TAG_INFO]: {
    getPath: (id) => `${api}tag/${id}`,
    method: METHODS.GET,
  },
  [ACTION.CHANGE_TAG_NAME]: {
    getPath: (id, newName) => `${api}tag/${id}?name=${newName}`,
    method: METHODS.PUT,
  },
  [ACTION.DELETE_TAG]: {
    getPath: (id) => `${api}tag/${id}`,
    method: METHODS.DELETE,
  },
  [ACTION.JOIN_EVENT]: {
    getPath: (id) => `${api}event/${id}/join`,
    method: METHODS.POST,
  },
  [ACTION.GET_PRESENTERS]: {
    getPath: (id) => `${api}event/${id}/presenters`,
    method: METHODS.GET,
  },
  [ACTION.ADD_MANAGER_TO_EVENT]: {
    getPath: (eventId) => `${api}${eventId}/manager`,
    method: METHODS.POST,
  },
  [ACTION.DELETE_MANAGER_FROM_EVENT]: {
    getPath: (eventId) => `${api}${eventId}/manager/delete`,
    method: METHODS.GET,
  },
  [ACTION.CREATE_TASK]: {
    getPath: (eventId) => `${api}event/${eventId}/task`,
    method: METHODS.POST,
  },
  [ACTION.DELETE_TASK]: {
    getPath: (eventId, taskId) => `${api}event/${eventId}/task/${taskId}/delete`,
    method: METHODS.GET,
  },
  [ACTION.MOVE_TASK]: {
    getPath: (eventId, taskId, status) => `${api}event/${eventId}/task/${taskId}/move/${status}`,
    method: METHODS.PUT,
  },
  [ACTION.GET_ALL_TASKS]: {
    getPath: (email) => `${api}event/${email}/task/all`,
    method: METHODS.GET,
  },
  [ACTION.UPDATE_TASK]: {
    getPath: (eventId, taskId) => `${api}event/${eventId}/task/${taskId}`,
    method: METHODS.PUT,
  },
};

export const relationToEvent = {
  'not joined': 'not joined',
  creator: 'creator',
  manager: 'manager',
  presenter: 'presenter',
  viewer: 'viewer',
};
