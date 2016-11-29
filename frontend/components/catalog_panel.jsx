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
    const projects = $('#projectsLi');
    const assets = $('#assetsLi');
    const contact = $('#contactLi');
    const viewportHeight = $('#contact')[0].scrollHeight;

    let eatsy = $('#eatsyLi');
    let sssf = $('#sssfLi');
    let endless = $('#endlessLi');

    $('.scroll-container').scroll(function(){
      const _inspirations = $('#inspirations')[0].scrollHeight;
      const _projects = $('#projects')[0].scrollHeight + _inspirations;
        let _eatsy = $('#eatsy-container')[0].scrollHeight + _inspirations;
        let _sssf = $('#sssf-container')[0].scrollHeight + _eatsy;
        let _endless = $('#endless-container')[0].scrollHeight + _sssf;
      const _assets = $('#assets')[0].scrollHeight + _projects;
      const _contact = $('#contact')[0].scrollHeight + _assets;
      const pos2 = $('.scroll-container').scrollTop();
      const pos = pos2 + Math.floor(viewportHeight / 2);
      if(pos < _inspirations){
        projects.removeClass('enlarge blue');
          eatsy.removeClass('enlarge orange');
      } else if(pos >= _inspirations && pos < _projects){
        if(!projects.hasClass('enlarge blue')){
          projects.addClass('enlarge blue');
          assets.removeClass('enlarge blue');
        }
        if(pos2 >= _inspirations && pos2 < _eatsy - 150){
          if(!eatsy.hasClass('enlarge orange')){
            eatsy.addClass('enlarge orange');
            sssf.removeClass('enlarge orange');
          }
        } else if(pos2 >= _eatsy + 150 && pos2 < _sssf){
          if(!sssf.hasClass('enlarge orange')){
            sssf.addClass('enlarge orange');
            eatsy.removeClass('enlarge orange');
            endless.removeClass('enlarge orange');
          }
        } else if(pos2 >= _sssf + 300 && pos2 < _endless + 150){
          if(!endless.hasClass('enlarge orange')){
            endless.addClass('enlarge orange');
            sssf.removeClass('enlarge orange');
          }
        }
      } else if(pos >= _projects && pos < _assets){
        if(!assets.hasClass('enlarge blue')){
          assets.addClass('enlarge blue');
          projects.removeClass('enlarge blue');
            endless.removeClass('enlarge orange');
          contact.removeClass('enlarge blue');
        }
      } else if(pos >= _assets && pos < _contact){
        if(!contact.hasClass('enlarge blue')){
          contact.addClass('enlarge blue');
          assets.removeClass('enlarge blue');
        }
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
            <ul id='projects-ul'>
              <li type='none' id='eatsyLi' onClick={()=>this.smoothScroll('eatsy')}>Eatsy</li>
              <li type='none' id='sssfLi' onClick={()=>this.smoothScroll('sssf')}>StreetSweepSF</li>
              <li type='none' id='endlessLi' onClick={()=>this.smoothScroll('endless')}>EndlessSprinter</li>
            </ul>
          <li type='none' id='assetsLi' onClick={()=>this.smoothScroll('assets')}>assets</li>
          <li type='none' id='contactLi' onClick={()=>this.smoothScroll('contact')}>contact</li>
        </ul>
      </div>
    );
  }
}

export default Catalog;
