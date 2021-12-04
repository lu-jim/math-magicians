import React from 'react';
import PropTypes from 'prop-types';

const Screen = (props) => {
  const { display: { total, operation, next } } = props;
  return (
    <div className="screen">
      {' '}
      <div>{operation || ''}</div>
      {' '}
      {next || total || '0' }
    </div>
  );
};

Screen.propTypes = {
  display: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,

};

export default Screen;
