import React, { createContext, useState } from 'react';

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };

  const updateBook = (index, updatedBook) => {
    const newBooks = books.map((book, i) => (i === index ? updatedBook : book));
    setBooks(newBooks);
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook, updateBook }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
