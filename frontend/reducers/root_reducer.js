import { combineReducers } from 'redux';
import ContactReducer from './contact_reducer';

const RootReducer = combineReducers({
  contact: ContactReducer
});

export default RootReducer;
