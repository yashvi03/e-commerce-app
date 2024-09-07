import "./Cards.css";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext";

const Cards = ({ book }) => {
  const { addToCart, isBookInCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(isBookInCart(book.id));
  }, [book.id, isBookInCart]);

  const handleAddToCart = () => {
    addToCart(book);
    setIsAdded(true);
  };

  return (
    <div className="card">
      <Link to={`/purchase/${book.id}`}>
        <img src={book.image} alt={book.title} className="card-image" />
      </Link>

      <div className="card-content">
        <h3 className="card-title">{book.title}</h3>
        <p className="card-author">{book.author}</p>
        <h3 className="card-price">Rs.{book.price}</h3>
      </div>
      <Button className="add" onClick={handleAddToCart} disabled={isAdded}>
        {isAdded ? "Added" : "Add"} <i className="fa-solid fa-bag-shopping"></i>
      </Button>
    </div>
  );
};

Cards.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Cards;
