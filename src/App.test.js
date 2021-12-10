import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  test('User navigation works properly', () => {
    render(<App />);

    expect(screen.getByText('Calculator')).toBeInTheDocument();
    expect(screen.queryByText('Let\'s do some math!')).toBeNull();
    userEvent.click(screen.getByText('Calculator'));
    expect(screen.getByText('Let\'s do some math!')).toBeInTheDocument();
    userEvent.click(screen.getByText('Quote'));
    expect(screen.queryByText('Let\'s do some math!')).toBeNull();
    userEvent.click(screen.getByText('Home'));
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });

  test('User can operate calculator', () => {
    render(<App />);

    expect(screen.getByText('Calculator')).toBeInTheDocument();
    userEvent.click(screen.getByText('Calculator'));
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('x'));
    userEvent.click(screen.getByText('4'));
    userEvent.click(screen.getByText('='));
    expect(screen.getByText('20')).toBeInTheDocument();
  });
});
