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
  const [categoryType, setCategoryType] = useState("category"); 

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await FetchData();
      setBooks(data.books);

      const uniqueCategories = [
        'all',
        ...new Set(data.books.flatMap((book) => book.category.split(" "))),
      ];
      setCategories(uniqueCategories);
    };

    fetchBooks();
  }, []);

  const handleCategoryClick = (category, type) => {
    setSelectedCategory(category);
    setCategoryType(type);
  };

  const filteredBooks = books.filter((book) => {
    const parseDate = (dateStr) => {
      const [day, month, year] = dateStr.split("-").map(Number);
      return new Date(year, month - 1, day);
    };

    const today = new Date();

    let startDate = new Date();
    let endDate = new Date();

    if (selectedCategory === "all") {
      return true; // Return true to include all books
    }

    if (categoryType === "time") {
      if (
        ["Last 30 days", "This week", "Next Week"].includes(selectedCategory)
      ) {
        switch (selectedCategory) {
          case "Last 30 days":
            startDate.setDate(startDate.getDate() - 30);
            endDate = today;
            break;
          case "This week":
            startDate.setDate(startDate.getDate() - today.getDay()); // Start of the week
            endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 7); // End of the week
            break;
          case "Next Week":
            startDate.setDate(startDate.getDate() + (7 - today.getDay())); // Start of next week
            endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 7); // End of next week
            break;
          default:
            break;
        }

        const releaseDate = parseDate(book.releasedDate);
        return startDate <= releaseDate && releaseDate <= endDate;
      }
    } else if (categoryType === "recommendation") {
      return book.recommendation === selectedCategory;
    } else {
      return book.category.split(" ").includes(selectedCategory);
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
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => <Cards key={book.id} book={book} />)
            ) : (
              <p>No books available for this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
