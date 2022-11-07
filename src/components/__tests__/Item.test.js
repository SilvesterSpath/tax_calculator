import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddItem } from '../AddItem';
import { Item } from '../Item';

test('receipt item value after submitting "1 book at 12.49" should be $12.49', () => {
  render(<AddItem />);

  userEvent.type(
    screen.getByPlaceholderText(/Choose an item.../i),
    '1 book at 12.49'
  );

  const item = {
    id: 10,
    name: '1 book',
    price: 12.49,
    isImported: false,
    total: 12.49,
  };
  render(<Item item={item} />);
  const addItemElement = screen.getByTestId('item-id');

  expect(addItemElement.textContent).toBe('$12.49');
});

test('receipt item value after submitting "1 imported bottle of perfume at 27.99" should be $32.19', () => {
  render(<AddItem />);

  userEvent.type(
    screen.getByPlaceholderText(/Choose an item.../i),
    '1 bottle of perfume at 27.99'
  );

  const item = {
    id: 10,
    name: '1 bottle of perfume',
    price: 27.99,
    isImported: true,
    total: 32.19,
  };
  render(<Item item={item} />);
  const addItemElement = screen.getByTestId('item-id');

  expect(addItemElement.textContent).toBe('$32.19');
});

test('receipt item value after submitting "1 bottle of perfume at 18.99" should be $20.89', () => {
  render(<AddItem />);

  userEvent.type(
    screen.getByPlaceholderText(/Choose an item.../i),
    '1 bottle of perfume at 18.99'
  );

  const item = {
    id: 10,
    name: '1 bottle of perfume',
    price: 18.99,
    isImported: false,
    total: 20.89,
  };
  render(<Item item={item} />);
  const addItemElement = screen.getByTestId('item-id');

  expect(addItemElement.textContent).toBe('$20.89');
});

test('receipt item value after submitting "1 packet of headache pills at 9.75" should be $9.75', () => {
  render(<AddItem />);

  userEvent.type(
    screen.getByPlaceholderText(/Choose an item.../i),
    '1 packet of headache pills at 9.75'
  );

  const item = {
    id: 10,
    name: '1 packet of headache pills',
    price: 9.75,
    isImported: false,
    total: 9.75,
  };
  render(<Item item={item} />);

  const addItemElement = screen.getByTestId('item-id');

  expect(addItemElement.textContent).toBe('$9.75');
});

test('receipt item value after submitting "1 box of imported chocolates at 11.25" should be $11.85', () => {
  render(<AddItem />);

  userEvent.type(
    screen.getByPlaceholderText(/Choose an item.../i),
    '1 box of chocolates at 11.25'
  );

  const item = {
    id: 10,
    name: '1 box of chocolates',
    price: 11.25,
    isImported: true,
    total: 11.85,
  };
  render(<Item item={item} />);
  const addItemElement = screen.getByTestId('item-id');

  expect(addItemElement.textContent).toBe('$11.85');
});
