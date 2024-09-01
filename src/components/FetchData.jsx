const url = "http://localhost:5000/api/books";

const FetchData = async () => {
  try {
    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    let obj = {
      books: data.map((book) => ({
        id: book.id,
        title: book.title,
        author: book.author, // Assuming there's an 'author' field in the book object
        price: book.price,
        description: book.description, // Assuming there's a 'description' field in the book object
        image: book.image,
        category: book.category,
        releasedDate: book.releasedDate,
        recommendation: book.recommendation
      }))
    };

    return obj;
  } catch (error) {
    console.error('FetchData error:', error);
    return null; // or you could return an empty object or array depending on your use case
  }
};

export default FetchData;
