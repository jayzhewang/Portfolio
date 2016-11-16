import React from 'react';
import Inspirations from './readings/inspirations';
import Projects from './readings/projects';
import Skills from './readings/skills';
import Contact from './readings/contact';

class ReadingPanel extends React.Component {
  render(){
    return (
      <div className='reading-panel'>
        <Inspirations />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default ReadingPanel;
