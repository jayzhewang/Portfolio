import React from 'react';

class AboutMe extends React.Component {
  constructor(props){
    super(props);
    this.goToContact = this.goToContact.bind(this);
  }

  goToContact(){
    $('#close').trigger('click');
    setTimeout(()=>{
      $('#contactLi').trigger('click');
    }, 1000);
  }

  render(){
    return(
      <div className='about-me display-none'>
        <div className='about-me-container'>
          <div>about me</div>
          <div className='am-header'>
            <div className='am-header-name'>
              <h1>Zhe</h1>
              <h1>Wang</h1>
            </div>
            <div className='am-img-container'>
              <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479617027/profile_ydfq0z.jpg'/>
            </div>
          </div>
          <div className='am-body'>
            <p>
              This is my portfolio site designed and coded from <u>scratch</u>.
              I am a web developer well versed in the Ruby and JavaScript ecosystems.
              My skill sets extend through the full stack. On the server side
              I'm expert in<span id='rails'> Rails</span>,<span id='nodejs'> Node.js</span>,
              in combination with RDBMS, in particular<span id='postgresql'> PostgreSQL</span>.
              On the front end, I'm very acquainted with <span id='react'>React</span>-
              <span id='react'>Redux</span>-<span id='react'>Flux</span>, as well as vanilla
              <span id='js'> JavaScript</span>,<span id='jquery'> jQuery</span>,
              and good old<span id='html5'> HTML5</span> and<span id='css3'> CSS3</span>.
              I love software that are created to be both beautiful and functional.
            </p>
            <p>
              I'm a proud graduate of<span id='appacademy'> App Academy</span>. During
              my study there, I have learned tremendously about computer science fundamentals and
              modern web development's best practices. I have worked with managers and
              designed applications that have realistic deadlines and achievable MVPs.
              I have 600+ hours of pair programming experiences, and I'm very
              knowledgeable on testing suites such as<span id='testsuite'> RSpec</span>,
              <span id='testsuite'> Jasmine</span>,<span id='testsuite'> Capybara</span>, and
              debugging tools such as<span id='debugger'> Chrome Dev Tools</span>,
              <span id='debugger'> pry</span>, and<span id='debugger'> byebug</span>.
            </p>
            <p>
              In my extra time, I have learned the ins and outs of Google APIs such as
              Maps, Chrome Extensions, and Analytics. I am always eager to learn
              new technologies, whether it be module bundlers, RESTful APIs, or
              the newest JS libraries, I keep myself up to date with modern
              technologies in the industry.
            </p>
            <p>
              Aside from my passion for anything web, I also like to read, hike, jog,
              lift weights, play basketball, and spend a good night playing my guitar
              or relax after a game of billiards. That is my introduction, nice to meet you,
              and I hope we can get together and discuss our common interests.
            </p>
          </div>
          <div className='am-misc'>
            <span onClick={this.goToContact}>Send</span> me a message!
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
