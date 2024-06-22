import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';
import { BookProvider } from './BookContext';
import './index.scss'; 


function App() {
  return (
    <BookProvider>
      <div className="flex  justify-center item-center  ml-[100px]">
      <h1 className="text-sm font-bold mb-4 ">Kitabxana Proqramı</h1>
      <BookForm />
        <BookSearch />
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;
