import React from 'react';

class SidePanel extends React.Component {
  componentDidMount(){
    $('.side-panel').addClass('side-panel-slider');
    setTimeout(()=>{
      $('.slide-panel').removeClass('side-panel-slider');
    }, 900);
  }

  render(){
    return(
      <div className='side-panel'>
        <div className='side-panel-bottom'>
          <div>about</div>
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
