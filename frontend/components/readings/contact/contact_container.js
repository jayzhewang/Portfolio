import { connect } from 'react-redux';
import createMessage from '../../../actions/contact_actions';
import Contact from './contact';

const mapStateToProps = state => ({
  contact: state.contact
});

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(createMessage(message))
});
