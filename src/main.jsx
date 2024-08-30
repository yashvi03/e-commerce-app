import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './components/CartContext'; // Import CartProvider
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Purchase from './components/Purchase/Purchase';
import Cart from './components/Cart/Cart';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/purchase/:id",
    element: <Purchase />,
  },
  {
    path: "/purchase",
    element: <div>Please select a book to purchase.</div>,
  },
  {
    path: "/cart",
    element: <Cart />, // Assuming you want to show the Cart without an ID
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
