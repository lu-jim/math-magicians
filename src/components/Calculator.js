import React from 'react';
import Screen from './Screen';
import Keys from './Keys';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Calculator">
        <Screen />
        <Keys />
      </div>
    );
  }
}

export default Calculator;
