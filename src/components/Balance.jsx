import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { items } = useContext(GlobalContext);

  const total = items
    .map((item) => item.total)
    .reduce((acc, item) => (acc += item), 0);

  const taxes = items
    .map((item) => item.taxRounded)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <div className='container2'>
        <h4>Total</h4>
        <p className='money plus' data-testid='total'>${total.toFixed(2)}</p>
      </div>
      <div>
        <h4>Sales Taxes</h4>
        <p className='money minus'>${taxes.toFixed(2)}</p>
      </div>
    </>
  );
};
