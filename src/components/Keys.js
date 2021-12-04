import React from 'react';

class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    this.props.onClick(e.target);
  }
  render() {
    const keys = [
      { label: 'element zero', name: '0' },
      { label: 'element one', name: '1' },
      { label: 'element two', name: '2' },
      { label: 'element three', name: '3' },
      { label: 'element four', name: '4' },
      { label: 'element five', name: '5' },
      { label: 'element six', name: '6' },
      { label: 'element seven', name: '7' },
      { label: 'element eight', name: '8' },
      { label: 'element nine', name: '9' },
      { label: 'element clear', name: 'AC' },
      { label: 'element sign', name: '+/-' },
      { label: 'element percent', name: '%' },
      { label: 'element dot', name: '.' },
      { label: 'operator plus', name: '+' },
      { label: 'operator minus', name: '-' },
      { label: 'operator times', name: 'x' },
      { label: 'operator divide', name: '÷' },
      { label: 'operator equal', name: '=' },
    ];
    const keyButtons = keys.map((el) => (
      <button className={el.label} key={keys.indexOf(el)} type="button" value={el.name} onClick={this.onClick}>
        {el.name}
      </button>
    ));

    return <div className="keys">{keyButtons}</div>;
  }
}

export default Keys;
