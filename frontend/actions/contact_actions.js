export const MessageConstants = {
  CREATE_MESSAGE: 'CREATE_MESSAGE',
  RECEIVE_MESSAGE: 'RECEIVE_MESSAGE'
};

export const createMessage = message => ({
  type: MessageConstants.CREATE_MESSAGE,
  message
});

export const receiveMessage = response => ({
  type: MessageConstants.RECEIVE_MESSAGE,
  response
});
