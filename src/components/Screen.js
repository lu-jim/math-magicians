import React from 'react';

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="screen"> <span>{this.props.display.operation ? this.props.display.operation : ''}</span> {this.props.display.next ? this.props.display.next : this.props.display.total ? this.props.display.total : '0'}</div>
    );
  }
}

export default Screen;
