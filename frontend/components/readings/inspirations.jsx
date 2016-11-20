import React from 'react';

class Inspirations extends React.Component {
  render(){
    return(
      <div className='quotes'>
        <img src='https://res.cloudinary.com/cloudlicious/image/upload/v1479628603/cloudcoder_p70n9u.png' />
        <div className='text'>
          <div>"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."</div>
          <div>- Brian W. Kernighan.</div>
        </div>
      </div>
    );
  }
}

export default Inspirations;
