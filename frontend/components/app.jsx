import React from 'react';
import SidePanel from './side_panel';
import Catalog from './catalog';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='main'>
        <SidePanel />
        <Catalog />
      </div>
    );
  }
}

export default App;
