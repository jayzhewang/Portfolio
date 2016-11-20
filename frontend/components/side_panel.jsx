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
    $('.about-close').removeClass('ac-keep-right ac-button-slider-left').
    addClass('ac-button-slider');
  }

  closeAboutMe(){
    let aboutMe = $('.about-me');
    aboutMe.removeClass('about-me-slider am-shift-right').
    addClass('am-shift-keep-right about-me-slider-left');
    setTimeout(()=>{
      $('.about-me').addClass('display-none').
      removeClass('am-shift-keep-right about-me-slider-left');
    }, 400);
    $('.about-close').removeClass('ac-button-slider')
    .addClass('ac-keep-right ac-button-slider-left');
  }

  render(){
    return(
      <div className='side-panel'>
        <div className='side-panel-bottom'>
          <div className='about-close'>
            <div id='close' onClick={this.closeAboutMe}>close</div>
            <div id='about' onClick={this.showAboutMe}>about</div>
          </div>
          <div>zwang91521@hotmail.com</div>
        </div>
        <div className='side-panel-links'>
          <a href='https://github.com/jz-wang'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479622604/githubpng_s578ds.png' /></a>
          <a href='https://www.linkedin.com/in/zhe-wang-b282b4127'><img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479622555/linkedinpng_ymsdt7.png' /></a>
        </div>
        <div className='side-panel-top'>
          <div>zhe wang</div>
        </div>
      </div>
    );
  }
}

export default SidePanel;
