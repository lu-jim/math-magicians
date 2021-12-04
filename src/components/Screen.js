import React from 'react';
import PropTypes from 'prop-types';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    const total = this.props.display.total ? this.props.display.total : '0';

    return (
      <div className="screen"> <span>{this.props.display.operation ? this.props.display.operation : ''}</span> {this.props.display.next ? this.props.display.next : total }</div>
    );
  }
}

Screen.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  string: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Screen;
