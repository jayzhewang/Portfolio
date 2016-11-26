import { MessageConstants, receiveMessage } from '../actions/contact_actions';
import { postMessage } from '../utils/contact_api_util';

const ContactMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case MessageConstants.CREATE_MESSAGE:
      const message = action.message;
      const success = response => dispatch(receiveMessage(response));
      postMessage(message, success);
      return next(action);
    default:
      return next(action);
  }
};
