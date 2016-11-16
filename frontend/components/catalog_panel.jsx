import React from 'react';

class Catalog extends React.Component {
  render(){
    return(
      <div className='catalog'>
        <ul>
          <li type='none'><a href="#inspirations">inspirations</a></li>
          <li type='none'><a href="#projects">projects</a></li>
          <li type='none'><a href="#skills">skills</a></li>
          <li type='none'><a href="#contact">contact</a></li>
        </ul>
      </div>
    );
  }
}

export default Catalog;
