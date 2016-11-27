import { combineReducers } from 'redux';
import ContactReducer from './contact_reducer';

const RootReducer = combineReducers({
  mailerMessage: ContactReducer
});

export default RootReducer;
