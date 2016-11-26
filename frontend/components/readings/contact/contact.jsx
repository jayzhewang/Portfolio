import React from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  sendMessage(){
    
  }

  render(){
    return(
      <div className='contact'>
        <div className='contact-inner'>
          <div className='contact-text'>
            <h1>Let's Talk</h1>
            <p>Projects. Partnerships. Coffee.</p>
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
          <button onClick={this.sendMessage}>Send!</button>
        </div>
      </div>
    );
  }
}

export default Contact;
