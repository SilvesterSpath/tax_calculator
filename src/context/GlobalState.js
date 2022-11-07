import React, { createContext, useReducer } from 'react';
import AppReducer from './Appreducer';

// Initial state
const initialState = {
  items: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteItem(id) {
    dispatch({
      type: 'DELETE_ITEM',
      payload: id,
    });
  }

  function addItem(item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        items: state.items,
        deleteItem,
        addItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
