import React from 'react';
import { render } from '@testing-library/react';
import App from 'containers/App/App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  const paragraphElement = container.getElementsByTagName('p')[0];
  expect(paragraphElement).toBeInTheDocument();
});
