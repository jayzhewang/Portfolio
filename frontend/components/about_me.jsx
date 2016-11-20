import React from 'react';

class AboutMe extends React.Component {
  render(){
    return(
      <div className='about-me display-none'>
        <div className='about-me-container'>
          <div>about me</div>
          <div className='am-header'>
            <div className='am-header-name'>
              <h1>Zhe</h1>
              <h1>Wang</h1>
            </div>
            <div className='am-img-container'>
              <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479617027/profile_ydfq0z.jpg'/>
            </div>
          </div>
          <div className='am-body'>
            Body
          </div>
          <div className='am-misc'>
            Misc
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
