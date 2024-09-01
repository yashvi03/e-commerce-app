import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Side_Nav from "../Side_Nav/Side_Nav";
import Cards from "../Cards/Cards";
import "./Shop.css";
import FetchData from "../FetchData";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await FetchData();
      setBooks(data.books);  

      const uniqueCategories = [
        "all",
        ...new Set(data.books.flatMap((book) => book.category.split(" "))),
      ];
      setCategories(uniqueCategories);
    };

    fetchBooks();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredBooks = books.filter((book) => {
    if (selectedCategory === "" || selectedCategory === "all") {
      return true;  // Return true to include all books
    }

    if (book.category.split(" ").includes(selectedCategory)) {
      return true;
    }
    if (["Last 30 days", "This week", "Next Week"].includes(selectedCategory)) {
      return book.releaseDateCategory === selectedCategory;
    }

    if (
      ["Best this year", "Popular in 2023", "All time Top"].includes(
        selectedCategory
      )
    ) {
      return book.recommendation === selectedCategory;
    }

    return false;
  });

  return (
    <div className="shop-container">
      <Navbar />
      <div className="shop-main">
        <Side_Nav
          handleCategoryClick={handleCategoryClick}
          categories={categories}
        />
        <div className="item-container">
          <div className="cards-container">
            {filteredBooks.map((book) => (
              <Cards key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
