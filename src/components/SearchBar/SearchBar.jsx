import { useState } from "react";
import './SearchBar.css';

const SearchBar = ({ setBooks }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const data = await response.json();
      const books = data.items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        description: item.volumeInfo.description,
        image: item.volumeInfo.imageLinks?.thumbnail,
        category: item.volumeInfo.categories?.[0] || "Unknown",
        price: Math.floor(Math.random() * 100) + 10, // Random price for each book
      }));
      setSuggestions(books);
    } catch (error) {
      console.error("Error fetching data from Google Books API:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      fetchBooks(value); // Fetch suggestions as the user types
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setBooks(suggestions); // Set the fetched books when Enter is pressed
      setSuggestions([]); // Clear suggestions after search
    }
  };

  const handleSuggestionClick = (book) => {
    setBooks([book]); // Set the clicked suggestion as the search result
    setQuery(book.title); // Set the clicked suggestion title in the input
    setSuggestions([]); // Clear suggestions after clicking
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search for books"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Trigger search on Enter key press
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((book) => (
            <li
              key={book.id}
              onClick={() => handleSuggestionClick(book)}
            >
              {book.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
