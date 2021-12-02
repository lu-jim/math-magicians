import React from 'react';

const operators = [
  { name: 'operator plus', value: '+' },
  { name: 'operator minus', value: '-' },
  { name: 'operator times', value: '*' },
  { name: 'operator divide', value: '/' },
  { name: 'operator equal', value: '=' },
];
const operatorButtons = operators.map((el) => <button className={el.name} key={operators.indexOf(el)} type="button">{el.value}</button>);

class Operator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="operator">{operatorButtons}</div>;
  }
}

export default Operator;
