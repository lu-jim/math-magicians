import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Screen from './Screen';
import Keys from './Keys';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [memory, setMemory] = useState({ total: null, next: null, operation: null });

  const onClick = ({ value }) => {
    const calc = calculate(memory, value);
    setMemory(calc);
  };

  onClick.PropTypes = {
    value: PropTypes.func.isRequired,
  };

  return (
    <div id="calculator">
      <div className="calc-text">
        <h2> Let&apos;s do some math!</h2>
      </div>

      <div className="calc-app">
        <Screen display={memory} />
        <Keys state={memory} onClick={onClick} />
      </div>
    </div>
  );
};

export default Calculator;
