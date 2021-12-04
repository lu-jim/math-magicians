import React from 'react';
import Screen from './Screen';
import Keys from './Keys';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { total: null, next: null, operation: null };
  }

  onClick(props) {
    const calc = calculate(this.state, props.value);
    this.setState({ total: calc.total, next: calc.next, operation: calc.operation });
  }

  render() {
    return (
      <>
        <Screen display={this.state} />
        <Keys state={this.state} onClick={this.onClick} />
      </>
    );
  }
}

export default Calculator;
