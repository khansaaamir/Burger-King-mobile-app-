import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Alert } from 'react-native';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: any;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If item exists, update quantity
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add new item with quantity 1
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const clearCart = () => setCart([]);

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove items with zero quantity
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
