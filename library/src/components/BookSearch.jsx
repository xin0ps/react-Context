import React, { useState, useContext } from 'react';
import { BookContext } from '../BookContext';

function BookSearch() {
  const { books } = useContext(BookContext);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
    const filteredBooks = books.filter((book) =>
      book.ad.toLowerCase().includes(e.target.value.toLowerCase()) ||
      book.muellif.toLowerCase().includes(e.target.value.toLowerCase()) ||
      book.janr.toLowerCase().includes(e.target.value.toLowerCase()) ||
      book.sehifeSayi.toString().includes(e.target.value)
    );
    setResults(filteredBooks);
  };

  return (
    <div>
      <input type="text" value={search} onChange={handleChange} placeholder="Axtarış..." />
      <div>
        {results.map((book, index) => (
          <div key={index}>
            <h3>{book.ad}</h3>
            <p>Müəllif: {book.muellif}</p>
            <p>Janr: {book.janr}</p>
            <p>Buraxılış ili: {book.il}</p>
            <p>Səhifələrin sayı: {book.sehifeSayi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookSearch;
