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
        author: book.author, 
        price: book.price,
        description: book.description, 
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
