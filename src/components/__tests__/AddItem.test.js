import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddItem } from '../AddItem';

test('on initial render "Add Item" button is disabled', () => {
  render(<AddItem />);

  expect(screen.getByRole('button', { id: /addItem/i })).toBeDisabled();
});

test('after choosing an item "Add Item" button is enbabled', () => {
  render(<AddItem />);

  userEvent.type(
    screen.getByPlaceholderText(/Choose an item.../i),
    '1 book at 12.49'
  );

  expect(screen.getByRole('button', { id: /addItem/i })).toBeEnabled();
});
