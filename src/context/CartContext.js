import React, { createContext, useReducer, useEffect } from 'react';
import { storeData, getData } from '../utils/storage';

const CartContext = createContext();

const initialState = { items: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        const updatedItems = [...state.items];
        updatedItems[index].quantity += 1;
        return { ...state, items: updatedItems };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'SET_CART':
      return { ...state, items: action.payload };

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    getData('cart').then(data => {
      if (data) dispatch({ type: 'SET_CART', payload: data });
    });
  }, []);

  useEffect(() => {
    storeData('cart', cart.items);
  }, [cart.items]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
