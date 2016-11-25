import React from 'react';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
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
            <label for='contact-name'>Name <sup>*</sup></label>
            <input value={this.state.name}
              id='contact-name'
              onChange={this.update('name')}/>
          </div>
          <div className='contact-input'>
            <label for='contact-email'>Email <sup>*</sup></label>
            <input value={this.state.email}
              id='contact-email'
              onChange={this.update('email')}/>
          </div>
          <div className='contact-input'>
            <label for='contact-message'>Message <sup>*</sup></label>
            <textarea value={this.state.message}
              id='contact-message'
              onChange={this.update('message')}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
