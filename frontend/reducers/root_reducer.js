import { combineReducers } from 'redux';
import ContactReducer from './contact_reducer';

export default combineReducers({
  contact: ContactReducer
});
