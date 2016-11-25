import React from 'react';
require('smoothscroll-polyfill').polyfill();

class Catalog extends React.Component {
  constructor(props){
    super(props);
    this.smoothScroll = this.smoothScroll.bind(this);
  }
  componentDidMount(){
    let catalog = $('.catalog');
    catalog.addClass('catalog-panel-slider catalog-shift-left');
    setTimeout(()=>{
      catalog.removeClass('catalog-panel-slider catalog-shift-left');
    }, 800);
  }

  smoothScroll(element){
    document.querySelector(`#${element}`).scrollIntoView({ behavior: 'smooth' });
  }

  render(){
    return(
      <div className='catalog'>
        <ul>
          <li type='none' onClick={()=>this.smoothScroll('projects')}>projects</li>
          <li type='none' onClick={()=>this.smoothScroll('assets')}>assets</li>
          <li type='none' onClick={()=>this.smoothScroll('contact')}>contact</li>
        </ul>
      </div>
    );
  }
}

export default Catalog;
