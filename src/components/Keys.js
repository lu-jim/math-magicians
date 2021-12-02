import React from 'react';
import Element from './Element';
import Operator from './Operator';

class Keys extends React.Component {
  render() {
    return (
      <div className='keys'>
        <Element />
        <Operator />
      </div>
    );
  }
}

export default Keys;
