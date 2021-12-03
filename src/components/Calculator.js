import React from 'react';
import Screen from './Screen';
import Keys from './Keys';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = { total: null, next: null, operation: null };
  }

  handleStateChange(newState) {
    this.setState({});
  }

  render() {
    return (
      <>
        <Screen display={this.state.total}/>
        <Keys state={this.state}/>
      </>
    );
  }
}

export default Calculator;
