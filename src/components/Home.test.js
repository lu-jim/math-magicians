import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

test('renders home correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
