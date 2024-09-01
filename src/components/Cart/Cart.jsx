import { useContext } from "react";
import { CartContext } from "../CartContext";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";

const Cart = () => {
  const { cart, getTotalPrice, removeFromCart } = useContext(CartContext);
  const totalPrice = getTotalPrice();

  return (
    <div>
      <Navbar />
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cart.map((book) => (
                <li key={book.id}>
                  <div className="cart-item">
                    <img src={book.image} alt={book.title} />
                    <div>
                      <p>{book.title}</p>
                      <p>Rs.{book.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(book.id)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h3>Total: Rs.{totalPrice}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
