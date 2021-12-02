import React from 'react';
import Screen from './Screen';
import Keys from './Keys';

class Calculator extends React.Component {
  render() {
    return (
      <div className='Calculator'>
        <Screen />
        <Keys />
      </div>
    );
  }
}

export default Calculator;
