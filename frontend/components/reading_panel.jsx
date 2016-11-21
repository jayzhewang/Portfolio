import React from 'react';
import Inspirations from './readings/inspirations';
import Projects from './readings/projects';
import Assets from './readings/assets';
import Contact from './readings/contact';

class ReadingPanel extends React.Component {
  componentDidMount(){
    let readingPanel = $('.reading-panel');
    readingPanel.addClass('rp-shift-left display-none');
    setTimeout(()=>{
      readingPanel.removeClass('display-none').addClass('slider-1');
      let readingPanel2 = readingPanel;
      setTimeout(()=>{
        readingPanel2.
        removeClass('rp-shift-left slider-1').
        addClass('rp-shift-left-1 reading-panel-slider');
        let readingPanel3 = readingPanel2;
        setTimeout(()=>{
          readingPanel3.removeClass('rp-shift-left-1 reading-panel-slider');
        }, 300);
      }, 400);
    }, 1000);
  }

  render(){
    return (
      <div className='reading-panel'>
        <div className='scroll-container'>
          <div className='scroll-page' id='inspirations'><Inspirations /></div>
          <div className='scroll-page' id='projects'><Projects /></div>
          <div className='scroll-page' id='assets'><Assets /></div>
          <div className='scroll-page' id='contact'><Contact /></div>
        </div>
      </div>
    );
  }
}

export default ReadingPanel;
