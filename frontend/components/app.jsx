import React from 'react';
import SidePanel from './side_panel';
import CatalogPanel from './catalog_panel';
import ReadingPanel from './reading_panel';
import AboutMe from './about_me';

const App = ({children}) => {
  return(
    <div className='main'>
      <SidePanel />
      <AboutMe />
      <CatalogPanel />
      <ReadingPanel />
    </div>
  );
};

export default App;
