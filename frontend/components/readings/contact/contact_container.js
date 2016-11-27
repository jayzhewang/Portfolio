import { connect } from 'react-redux';
import { createMessage } from '../../../actions/contact_actions';
import Contact from './contact';

const mapStateToProps = state => ({
  mailerMessage: state.mailerMessage
});

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(createMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
