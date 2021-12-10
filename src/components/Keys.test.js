import React from 'react';
import renderer from 'react-test-renderer';
import Keys from './Keys';

test('renders keys correctly', () => {
  const onClick = () => 'mock';
  const tree = renderer.create(<Keys onClick={onClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});
