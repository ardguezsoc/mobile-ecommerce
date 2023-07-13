import { useContext } from 'react';
import { CartContext } from '../context/cart';

export const useCart = () => {
  const { addItem, emptyCart, numberOfItems, cartItems } = useContext(CartContext);
  return { addItem, emptyCart, numberOfItems, cartItems };
};

export default useCart;
