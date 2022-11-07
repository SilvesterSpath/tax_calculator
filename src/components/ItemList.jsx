import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Item } from './Item';

export const ItemList = () => {
  const { items } = useContext(GlobalContext);

  console.log(items);

  return (
    <>
      <h3>Receipt</h3>
      <ul className='list'>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};
