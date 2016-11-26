import { MessageConstants } from '../actions/contact_actions';

const ContactReducer = (state = [], action) => {
  switch(action.type){
    case MessageConstants.RECEIVE_MESSAGE:
      const response = action.response;
      return state.concat([response]);
    default:
      return state;
  }
};

export default ContactReducer;
