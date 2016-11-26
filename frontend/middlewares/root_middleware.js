import { applyMiddleware } from 'redux';
import ContactMiddleware from './contact_middleware';

export default applyMiddleware(
  ContactMiddleware
);
