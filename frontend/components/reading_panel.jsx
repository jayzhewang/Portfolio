import React from 'react';
import Inspirations from './readings/inspirations';
import Projects from './readings/projects';
import Skills from './readings/skills';
import Contact from './readings/contact';

class ReadingPanel extends React.Component {
  render(){
    return (
      <div className='reading-panel'>
        <div className='scroll-container'>
          <div className='scroll-page' id='inspirations'><Inspirations /></div>
          <div className='scroll-page' id='projects'><Projects /></div>
          <div className='scroll-page' id='skills'><Skills /></div>
          <div className='scroll-page' id='contact'><Contact /></div>
        </div>
      </div>
    );
  }
}

export default ReadingPanel;
