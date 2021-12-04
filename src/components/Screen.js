import React from 'react';
import PropTypes from 'prop-types';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { display } = this.props;
    const total = display.total ? display.total : '0';

    return (
      <div className="screen">
        {' '}
        <div>{display.operation ? display.operation : ''}</div>
        {' '}
        {display.next ? display.next : total }
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
