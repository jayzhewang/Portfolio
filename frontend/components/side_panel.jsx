import React from 'react';

class SidePanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      aboutMeShown: false,
      aboutMe: '',
      aboutClose: ''
    };
    this.showAboutMe = this.showAboutMe.bind(this);
    this.closeAboutMe = this.closeAboutMe.bind(this);
    this.openSlider = this.openSlider.bind(this);
  }

  componentDidMount(){
    this.setState({
      aboutMe: $('.about-me'),
      aboutClose: $('.about-close')
    });
    setTimeout(()=>{
      $('.side-panel').addClass('side-panel-slider');
    }, 600);
  }

  showAboutMe(){
    this.state.aboutMe.removeClass('display-none').addClass('am-slider-1');
    setTimeout(()=>{
      this.state.aboutMe.removeClass('am-slider-1').
      addClass('am-shift-right about-me-slider');
      this.state.aboutClose.removeClass('ac-keep-right ac-button-slider-left').
      addClass('ac-button-slider');
    }, 400);
    this.setState({aboutMeShown: true});
  }

  closeAboutMe(){
    this.state.aboutMe.removeClass('about-me-slider am-shift-right').
    addClass('am-shift-keep-right about-me-slider-left');
    setTimeout(()=>{
      this.state.aboutMe.addClass('display-none').
      removeClass('am-shift-keep-right about-me-slider-left');
    }, 400);
    this.state.aboutClose.removeClass('ac-button-slider')
    .addClass('ac-keep-right ac-button-slider-left');
    this.setState({aboutMeShown: false});
  }

  openSlider(){
    if(!this.state.aboutMeShown){
      this.showAboutMe();
    }
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
        <div className='side-panel-top'>
          <div className='side-panel-links'>
            <div className='github-background'>
              <a href='https://github.com/jz-wang'>
                <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479622604/githubpng_s578ds.png' />
              </a>
            </div>
            <div className='linkedin-background'>
              <a href='https://www.linkedin.com/in/zhe-wang-b282b4127'>
                <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479793763/linkedin_yv8hpk.png' />
              </a>
            </div>
          </div>
          <div onClick={this.openSlider}>zhe wang</div>
        </div>
      </div>
    );
  }
}

export default SidePanel;
