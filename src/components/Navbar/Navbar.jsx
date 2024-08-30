import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="logo">
        book<span className="logo">Stop</span>
      </p>
      <div className="nav-links">
        <Link to="/">
          <div className="home">Home</div>
        </Link>
        <Link to="/shop">
          <div className="shop">Shop</div>
        </Link>
      </div>

      <Link to="/cart" className="shopping-cart-icon">
        <span className="material-symbols-outlined">shopping_cart</span>
      </Link>
    </div>
  );
};

export default Navbar;
