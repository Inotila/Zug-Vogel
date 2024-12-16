import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Import the Jest matchers from jest-dom for additional matchers
import '@testing-library/jest-dom'; // This line enables the `toBeInTheDocument()` matcher

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
