import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Painting } from '../types';

interface CartContextType {
  cart: Painting[];
  addToCart: (painting: Painting) => void;
  removeFromCart: (paintingId: string) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Painting[]>([]);

  const addToCart = (painting: Painting) => {
    setCart((prevCart) => {
      if (!prevCart.find(item => item.id === painting.id)) {
        return [...prevCart, painting];
      }
      return prevCart;
    });
  };

  const removeFromCart = (paintingId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== paintingId));
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
