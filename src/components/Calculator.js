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
    <>
      <Screen display={memory} />
      <Keys state={memory} onClick={onClick} />
    </>
  );
};

export default Calculator;
