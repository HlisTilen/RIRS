import { render, screen } from '@testing-library/react';
import App from './App';

test('prikaže povezavo za učenje', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
