import React, { useState, useContext } from 'react';
import { BookContext } from '../BookContext';

function BookForm() {
  const { addBook } = useContext(BookContext);
  const [book, setBook] = useState({ ad: '', muellif: '', janr: '', il: '', sehifeSayi: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(book);
    setBook({ ad: '', muellif: '', janr: '', il: '', sehifeSayi: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="ad" value={book.ad} onChange={handleChange} placeholder="Kitabın adı" required />
      <input type="text" name="muellif" value={book.muellif} onChange={handleChange} placeholder="Kitab müəllifi" required />
      <input type="text" name="janr" value={book.janr} onChange={handleChange} placeholder="Kitab janrı" required />
      <input type="number" name="il" value={book.il} onChange={handleChange} placeholder="Buraxılış ili" required />
      <input type="number" name="sehifeSayi" value={book.sehifeSayi} onChange={handleChange} placeholder="Səhifələrin sayı" required />
      <button type="submit">Əlavə et</button>
    </form>
  );
}

export default BookForm;
