import React, { useState, useContext } from 'react';
import { BookContext } from '../BookContext';

function BookList() {
  const { books, deleteBook, updateBook } = useContext(BookContext);
  const [isEditing, setIsEditing] = useState(null);
  const [currentBook, setCurrentBook] = useState({ ad: '', muellif: '', janr: '', il: '', sehifeSayi: '' });

  const handleEdit = (index) => {
    setIsEditing(index);
    setCurrentBook(books[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentBook({ ...currentBook, [name]: value });
  };

  const handleUpdate = (index) => {
    updateBook(index, currentBook);
    setIsEditing(null);
  };

  return (
    <div>
      {books.map((book, index) => (
        <div key={index}>
          {isEditing === index ? (
            <div className='flex flex-row'>
              <input type="text" name="ad" value={currentBook.ad} onChange={handleChange} />
              <input type="text" name="muellif" value={currentBook.muellif} onChange={handleChange} />
              <input type="text" name="janr" value={currentBook.janr} onChange={handleChange} />
              <input type="number" name="il" value={currentBook.il} onChange={handleChange} />
              <input type="number" name="sehifeSayi" value={currentBook.sehifeSayi} onChange={handleChange} />
              <button onClick={() => handleUpdate(index)}>Yenilə</button>
            </div>
          ) : (
            <div>
              <h3>{book.ad}</h3>
              <p>Müəllif: {book.muellif}</p>
              <p>Janr: {book.janr}</p>
              <p>Buraxılış ili: {book.il}</p>
              <p>Səhifələrin sayı: {book.sehifeSayi}</p>
              <button onClick={() => handleEdit(index)}>Dəyiş</button>
              <button onClick={() => deleteBook(index)}>Sil</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BookList;
