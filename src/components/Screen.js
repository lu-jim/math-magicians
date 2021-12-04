import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable react/destructuring-assignment */
class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const total = this.props.display.total ? this.props.display.total : '0';

    return (
      <div className="screen">
        {' '}
        <div>{this.props.display.operation ? this.props.display.operation : ''}</div>
        {' '}
        {this.props.display.next ? this.props.display.next : total }
      </div>
    );
  }
}

Screen.propTypes = {
  display: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,

};

export default Screen;
