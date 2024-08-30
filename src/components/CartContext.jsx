import { createContext, useState, useEffect } from "react";

// Create the context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from local storage if available
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart to local storage whenever it changes
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
