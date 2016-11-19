import React from 'react';

class Catalog extends React.Component {
  componentDidMount(){
    $('.catalog').addClass('catalog-panel-slider catalog-shift-left');
    setTimeout(()=>{
      $('.catalog').removeClass('catalog-panel-slider catalog-shift-left');
    }, 1000);
  }

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
