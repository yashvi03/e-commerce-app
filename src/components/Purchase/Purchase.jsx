import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import FetchData from "../FetchData";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import { CartContext } from "../CartContext";
import "./Purchase.css";

const Purchase = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await FetchData();
        const selectedBook = data.books.find((book) => book.id === id); 
        if (selectedBook) {
          setBook(selectedBook);
        } else {
          setError("Book not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    <div>
      <Navbar />
      <div className="book-details">
        <div className="left">
          <img className="book-image" src={book.image} alt={book.title} />
          <Button className="add" onClick={() => addToCart(book)}>
            Add <i className="fa-solid fa-bag-shopping"></i>
          </Button>
        </div>
        <div className="right">
          <p className="book-title">{book.title}</p>
          <p className="author">{book.author}</p>
          <p className="price">Rs.{book.price}</p>
          <p className="desc">{book.description}</p>
          <em className="genre">{book.category}</em>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Purchase;
