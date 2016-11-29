/*eslint max-len: ['error', 300]*/
import React from 'react';
require('smoothscroll-polyfill').polyfill();

class Inspirations extends React.Component {
  constructor(props){
    super(props);
    this.smoothScroll = this.smoothScroll.bind(this);
  }

  smoothScroll(element){
    document.querySelector(`#${element}`).scrollIntoView({ behavior: 'smooth' });
  }

  render(){
    return(
      <div className='quotes'>
        <div className='quotes-img-text'>
          <div>
            <div className='quotes-img-short-desc'>
              <p>Zhe is a web developer currently living in</p>
              <p>San Francisco.</p>
            </div>
            <div className='view-portfolio'>
              <div onClick={()=>this.smoothScroll('projects')}>view portfolio</div>
              <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1480069274/down-arrow_ayzzwl.png'
                   onClick={()=>this.smoothScroll('projects')}/>
            </div>
          </div>
        </div>
        <div className='quotes-coder-img'>
          <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1480065235/cloudcoder_am73qm.png'/>
        </div>
        <div className='text'>
          <div>
            <div className='quote-line'>
              <div><span id='quotation-mark'>“</span></div>
              <div>Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.<span id='quotation-mark'>​‌”</span></div>
            </div>
            <div>Brian W. Kernighan</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inspirations;
