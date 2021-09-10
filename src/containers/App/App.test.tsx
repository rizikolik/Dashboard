import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { queryAllByText } = render(<App />);
  const lorems = queryAllByText('Lorem')[0];
  expect(lorems).toBeInTheDocument();
});
