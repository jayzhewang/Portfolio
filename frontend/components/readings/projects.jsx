import React from 'react';

class Projects extends React.Component {
  render(){
    return(
      <div className='projects'>
        <div className='single-project-container' id='eatsy-container'>
          <div className='single-project' id='eatsy'>
            <span></span>
            <div className='project-description'>
              <h1>Eatsy</h1>
              <div className='project-links'>
                <div>
                  <div className='project-live'>
                    <a href='http://www.eatsyapp.net/'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479796039/live_ghqrvb.png'/></a>
                  </div>
                  <div className='project-github'>
                    <a href='https://github.com/jz-wang/Eatsy'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479798798/github_h9jurw.png'/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='filler-container'></div>
        <div className='single-project-container' id='sssf-container'>
          <div className='single-project' id='sssf'>
            <span></span>
            <div className='project-description'>
              <h1>StreetSweepSF</h1>
              <div className='project-links'>
                <div>
                  <div className='project-live'>
                    <a href='https://chrome.google.com/webstore/detail/streetsweepsf/amepcflliholagifophjfhcffnfifbeh'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479796039/live_ghqrvb.png'/></a>
                  </div>
                  <div className='project-github'>
                    <a href='https://github.com/jz-wang/StreetSweepSF'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479798798/github_h9jurw.png'/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='filler-container'></div>
        <div className='single-project-container' id='endless-container'>
          <div className='single-project' id='endless'>
            <span></span>
            <div className='project-description'>
              <h1>EndlessSprinter</h1>
              <div className='project-links'>
                <div>
                  <div className='project-live'>
                    <a href='https://jz-wang.github.io/'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479796039/live_ghqrvb.png'/></a>
                  </div>
                  <div className='project-github'>
                    <a href='https://github.com/jz-wang/EndlessSprinter'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479798798/github_h9jurw.png'/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
