import React from 'react';

class SidePanel extends React.Component {
  constructor(props){
    super(props);
    this.showAboutMe = this.showAboutMe.bind(this);
    this.closeAboutMe = this.closeAboutMe.bind(this);
  }

  componentDidMount(){
    setTimeout(()=>{
      $('.side-panel').addClass('side-panel-slider');
    }, 600);
  }

  showAboutMe(){
    let aboutMe = $('.about-me');
    aboutMe.removeClass('display-none').addClass('am-slider-1');
    setTimeout(()=>{
      $('.about-me').
      removeClass('am-slider-1').addClass('am-shift-right about-me-slider');
    }, 400);
    $('#about').addClass('display-none');
    $('#close').removeClass('display-none');
  }

  closeAboutMe(){
    let aboutMe = $('.about-me');
    aboutMe.removeClass('about-me-slider am-shift-right').
    addClass('am-shift-keep-right about-me-slider-left');
    setTimeout(()=>{
      $('.about-me').addClass('display-none').
      removeClass('am-shift-keep-right about-me-slider-left');
    }, 400);
    $('#close').addClass('display-none');
    $('#about').removeClass('display-none');
  }

  render(){
    return(
      <div className='side-panel'>
        <div className='side-panel-bottom'>
          <div id='about' onClick={this.showAboutMe}>about</div>
          <div id='close'
               className='display-none'
               onClick={this.closeAboutMe}>close</div>
          <div>zwang91521@hotmail.com</div>
        </div>
        <div className='side-panel-top'>
          <div>zhe wang</div>
        </div>
      </div>
    );
  }
}

export default SidePanel;
