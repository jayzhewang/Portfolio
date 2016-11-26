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
    this.setScrollLine();
  }

  setScrollLine(){
    let projects = $('#projectsLi');
    let assets = $('#assetsLi');
    let contact = $('#contactLi');
    let extra = $('#contact')[0].scrollHeight;
    $('.scroll-container').scroll(function(){
      let first = $('#inspirations')[0].scrollHeight;
      let second = $('#projects')[0].scrollHeight + first;
      let third = $('#assets')[0].scrollHeight + second;
      let fourth = $('#contact')[0].scrollHeight + third;
      let pos = $('.scroll-container').scrollTop() + Math.floor(extra / 4);
      if(pos < first){
        projects.removeClass('enlarge');
      } else if(pos >= first && pos < second && !projects.hasClass('enlarge')){
        projects.addClass('enlarge');
        assets.removeClass('enlarge');
      } else if(pos >= second && pos < third && !assets.hasClass('enlarge')){
        assets.addClass('enlarge');
        projects.removeClass('enlarge');
        contact.removeClass('enlarge');
      } else if(pos >= third && pos < fourth && !contact.hasClass('enlarge')){
        contact.addClass('enlarge');
        assets.removeClass('enlarge');
      }
    });
  }

  smoothScroll(element){
    document.querySelector(`#${element}`).scrollIntoView({ behavior: 'smooth' });
  }

  render(){
    return(
      <div className='catalog'>
        <ul>
          <li type='none' id='projectsLi' onClick={()=>this.smoothScroll('projects')}>projects</li>
          <li type='none' id='assetsLi' onClick={()=>this.smoothScroll('assets')}>assets</li>
          <li type='none' id='contactLi' onClick={()=>this.smoothScroll('contact')}>contact</li>
        </ul>
      </div>
    );
  }
}

export default Catalog;
