import React from 'react';

class Projects extends React.Component {
  render(){
    return(
      <div className='projects'>
        <div className='single-project'>
          <img src="https://res.cloudinary.com/cloudlicious/image/upload/v1479408575/eatsy_bnsqaq.png"
               className='gray-scale-img'
               width='auto'
               height='300'/>
          <div className='project-description'>
              <div>
                <h1>Eatsy</h1>
                <div className='project-links'>
                  <a href='http://www.eatsyapp.net/'>live</a>
                  <a href='https://github.com/jz-wang/Eatsy'>github</a>
                </div>
              </div>
              <div>

              </div>
          </div>
        </div>
        <div className='single-project'>
          <div className='project-description'>
            <div>
              <h1>StreetSweepSF</h1>
              <div className='project-links'>
                <a href='https://chrome.google.com/webstore/detail/streetsweepsf/amepcflliholagifophjfhcffnfifbeh'>live</a>
                <a href='https://github.com/jz-wang/StreetSweepSF'>github</a>
              </div>
            </div>
            <div>

            </div>
          </div>
          <img src="https://res.cloudinary.com/cloudlicious/image/upload/v1479408573/chrome_wfgmu7.png"
               className='gray-scale-img'
               width='auto'
               height='300'/>
        </div>
        <div className='single-project'>
          <img src="https://res.cloudinary.com/cloudlicious/image/upload/v1479408572/endless_clsruf.png"
               className='gray-scale-img'
               width='auto'
               height='300'/>
          <div className='project-description'>
            <div>
              <h1>EndlessSprinter</h1>
              <div className='project-links'>
                <a href='https://jz-wang.github.io/'>live</a>
                <a href='https://github.com/jz-wang/EndlessSprinter'>github</a>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
