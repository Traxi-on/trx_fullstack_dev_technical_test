import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';

import App from './App';

it('renders learn react link', async () => {
  render(<App />);
  const linkElement = await waitFor(() => screen.getByText('Tracking App'));
  expect(linkElement).toBeInTheDocument();
});
