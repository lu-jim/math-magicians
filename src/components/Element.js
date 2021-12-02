import React from 'react';

const elements = [
  { name: 'element zero', value: 0 },
  { name: 'element one', value: 1 },
  { name: 'element two', value: 2 },
  { name: 'element three', value: 3 },
  { name: 'element four', value: 4 },
  { name: 'element five', value: 5 },
  { name: 'element six', value: 6 },
  { name: 'element seven', value: 7 },
  { name: 'element eight', value: 8 },
  { name: 'element nine', value: 9 },
  { name: 'element clear', value: 'AC' },
  { name: 'element sign', value: '+/-' },
  { name: 'element percent', value: '%' },
  { name: 'element dot', value: '.' },
];

const elementButtons = elements.map((el) => <button className={el.name}>{el.value}</button>);

class Element extends React.Component {
  render() {
    return <div className="elements">{elementButtons}</div>;
  }
}

export default Element;
