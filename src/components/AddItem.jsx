import React, { useState, useContext } from 'react';
import { TaxedProduct } from '../products/TaxedProduct';
import { TaxfreeProduct } from '../products/TaxfreeProduct';
import { store } from '../data/store';

import { GlobalContext } from '../context/GlobalState';

export const AddItem = () => {
  const { addItem } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [imported, setImported] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    
    if (text.trim() === '') {
      alert('Please choose an item');
    } else {
      const id = Math.floor(Math.random() * 10000000);
      const name = text
        .split(' ')
        .slice(0, text.split(' ').length - 2)
        .join(' ')
        .trim();
      const price = Number(text.match(/\d?\d.\d\d/g));

      let product;

      if (
        store.food.includes(text) ||
        store.books.includes(text) ||
        store.medical.includes(text)
      ) {
        product = new TaxfreeProduct(
          id,
          imported ? 'imported ' + name : name,
          price,
          imported
        );
        console.log('taxedfree');
      } else {
        product = new TaxedProduct(
          id,
          imported ? 'imported ' + name : name,
          price,
          imported
        );
        console.log('taxed');
      }
      console.log(product);

      addItem(product);
      setText('');
    }
  };

  return (
    <>
      <h3>Add new item</h3>
      <form onSubmit={Submit}>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Choose an item...'
            value={text}
            list='items'
            onChange={(e) => setText(e.target.value)}
          />
          <datalist id='items'>
            <option value='1 book at 12.49'></option>
            <option value='1 music CD at 14.99'></option>
            <option value='1 chocolate bar at 0.85'></option>
            <option value='1 box of chocolates at 10.00'></option>
            <option value='1 bottle of parfume at 47.50'></option>
            <option value='1 bottle of perfume at 27.99'></option>
            <option value='1 bottle of perfume at 18.99'></option>
            <option value='1 packet of headache pills at 9.75'> </option>
            <option value='1 box of chocolates at 11.25'> </option>
          </datalist>
        </div>
        <label htmlFor='imported'>Imported</label>
        <label className='switch'>
          <input
            type='checkbox'
            value={imported}
            onChange={() => setImported(!imported)}
          ></input>
          <span className='slider round'></span>
        </label>
        <button className='btn' id='addItem' disabled={!text}>Add Item</button>
      </form>
    </>
  );
};
