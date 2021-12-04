import React from 'react';
import PropTypes from 'prop-types';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static propTypes = {
    display: PropTypes.object.isRequired,
  }

  render() {
    const total = this.props.display.total ? this.props.display.total : '0';

    return (
      <div className="screen"> <span>{this.props.display.operation ? this.props.display.operation : ''}</span> {this.props.display.next ? this.props.display.next : total }</div>
    );
  }
}

export default Screen;
