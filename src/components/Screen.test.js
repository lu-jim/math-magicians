import React from 'react';
import renderer from 'react-test-renderer';
import Screen from './Screen';

test('renders screen correctly', () => {
  const memory = {
    total: '5',
    next: '7',
    operation: '-',
  };
  const tree = renderer.create(<Screen display={memory} />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="screen"
    >
       
      <div>
        -
      </div>
       
      7
    </div>
  `);
});
