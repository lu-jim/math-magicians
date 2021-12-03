import React from 'react';

class Screen extends React.Component {
  render() {
    return <div className="screen">{this.props.display ? this.props.display : '0'}</div>;
  }
}

export default Screen;
