import React from 'react';
import Element from './Element';
import Operator from './Operator';

class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="keys">
        <Element />
        <Operator />
      </div>
    );
  }
}

export default Keys;
