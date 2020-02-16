import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import events from './fetchReducer';
import user from './userReducer';
import auth from './auth';

export default combineReducers({
  events,
  form,
  user,
  auth,
});
