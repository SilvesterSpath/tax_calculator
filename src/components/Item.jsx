import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const Item = ({ item }) => {
  const { deleteItem } = useContext(GlobalContext);

  return (
    <>
      <li key={item.id}  >
        {item.name}{' '}
        <span data-testid={'item-id'}>
          ${Math.abs(item.total)}
        </span>
        <button className='delete-btn' onClick={(e) => deleteItem(item.id)}>
          x
        </button>
      </li>
    </>
  );
};
