import { render, screen } from '@testing-library/react';
import { Balance } from '../Balance';

test('should render Balance component', () => {
  render(<Balance />);
  const addItemElement = screen.getByTestId('total');

  expect(addItemElement).toBeInTheDocument();
});

test('total value on initial render should be $0.00', () => {
  render(<Balance />);
  const addItemElement = screen.getByTestId('total');

  expect(addItemElement.textContent).toBe('$0.00');
});
