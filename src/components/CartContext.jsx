import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((book) => book.id !== bookId));
  };

  const isBookInCart = (bookId) => {
    return cart.some((book) => book.id === bookId);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, book) => total + parseFloat(book.price), 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isBookInCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
