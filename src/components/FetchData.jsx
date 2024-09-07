const url = "https://e-commerce-backend-4-05an.onrender.com/books";

const FetchData = async () => {
  try {
    const response = await fetch(url, { mode: 'cors' })

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
    return { books: [] }; 
  }
  }
  
}

export default FetchData;
