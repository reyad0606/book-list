import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Reyad's Reading List</h1>
      <p>Currently {books.length} Books to get through...</p>
    </div>
  );
};

export default Navbar;
