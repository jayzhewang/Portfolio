import React from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      messageSent: false,
      messageDelivered: false
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidUpdate(){
    if(this.props.mailerMessage[0] === 'delivered' &&
       !this.state.messageDelivered){
      this.setState({
        name: '',
        email: '',
        message: '',
        messageDelivered: true
      });
    }
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  sendMessage(){
    if(!this.state.name){
      alert('Please enter your name.');
    } else if(!this.state.email){
      alert('Please enter your email.');
    } else if(!this.state.message){
      alert('Please enter a message.');
    } else {
      let message = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      };
      this.props.sendMessage(message);
      this.setState({messageSent: true});
    }
  }

  showContactForm(){
    return(
      <div className='contact'>
        <div className='contact-inner'>
          <div className='contact-text'>
            <h1>Let's Talk</h1>
            <p>Projects. Opportunities. Coffee.</p>
          </div>
          <div className='contact-input'>
            <label htmlFor='contact-name'>Name <sup>*</sup></label>
            <input value={this.state.name}
              id='contact-name'
              onChange={this.update('name')}/>
          </div>
          <div className='contact-input'>
            <label htmlFor='contact-email'>Email <sup>*</sup></label>
            <input value={this.state.email}
              id='contact-email'
              onChange={this.update('email')}/>
          </div>
          <div className='contact-input'>
            <label htmlFor='contact-message'>Message <sup>*</sup></label>
            <textarea value={this.state.message}
              id='contact-message'
              onChange={this.update('message')}/>
          </div>
          <button id='send-button' onClick={this.sendMessage}>
            <div>Send</div>
            {this.showLoader()}
          </button>
        </div>
      </div>
    );
  }

  showMessageReceived(){
    return (
      <div className='contact'>
        <div className='message-received'>
          <h1>Message Sent</h1>
          <h1>We'll be in touch soon.</h1>
        </div>
      </div>
    );
  }

  showLoader(){
    if(this.state.messageSent){
      return (
        <div className='loader'></div>
      );
    }
  }

  render(){
    if(this.state.messageDelivered){
      return this.showMessageReceived();
    } else {
      return this.showContactForm();
    }
  }
}

export default Contact;
