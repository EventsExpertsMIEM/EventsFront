import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import events from './eventsReducer';
import user from './userReducer';
import tags from './tagsReducer';
import table from './tableReducer';

export default combineReducers({
  events,
  form,
  user,
  tags,
  table,
});
