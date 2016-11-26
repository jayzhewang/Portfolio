import { applyMiddleware } from 'redux';
import ContactMiddleware from './contact_middleware';

const RootMiddleware = applyMiddleware(
  ContactMiddleware
);

export default RootMiddleware;
