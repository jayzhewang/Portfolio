import React from 'react';
import SidePanel from './side_panel';
import CatalogPanel from './catalog_panel';
import ReadingPanel from './reading_panel';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='main'>
        <SidePanel />
        <CatalogPanel />
        <ReadingPanel />
      </div>
    );
  }
}

export default App;
