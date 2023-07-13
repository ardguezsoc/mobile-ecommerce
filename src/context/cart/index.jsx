import React, { useState } from 'react';

export const CartContext = React.createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (itemId) => setCartItems([...cartItems, itemId]);

  const emptyCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addItem, emptyCart, numberOfItems: cartItems.length }}>
      {children}
    </CartContext.Provider>
  );
};
