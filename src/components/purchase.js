import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import booksData from './books.json';

function PurchasePage() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('http://localhost:7000/get_book')
      .then(response => response.json())
      .then(data => {
        // Update the books state with the fetched data
        setBooks(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleAddToCart = () => {
    if (selectedBook && quantity > 0) {
      const cartItem = {
        book: selectedBook,
        quantity,
      };

      const existingCart = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];
      const existingItemIndex = existingCart.findIndex((item) => item.book.id === selectedBook.id);

      if (existingItemIndex !== -1) {
        existingCart[existingItemIndex].quantity += quantity;
      } else {
        existingCart.push(cartItem);
      }

      sessionStorage.setItem('shoppingCart', JSON.stringify(existingCart));

      setSelectedBook(null);
      setQuantity(1);
    } else {
      alert('Please select a book and specify the quantity.');
    }
  };

  const navigateToCart = () => {
    navigate('/Cart');
  };

  const handleClearShoppingCart = () => {
    sessionStorage.removeItem('shoppingCart');
    alert('Shopping Cart has been cleared.');
  };

  return (
    <div>
      <h1>Purchase Page</h1>

      <div className="book-list">
        <h2>Available Books</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <button onClick={() => handleBookSelect(book)}>
                {book.title} (${book.price.toFixed(2)})
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedBook && (
        <div className="selected-book">
          <h2>Selected Book</h2>
          <p>Title: {selectedBook.title}</p>
          <p>Author: {selectedBook.author}</p>
          <p>Price: ${selectedBook.price.toFixed(2)}</p>
          <p>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </p>
          <button onClick={handleAddToCart}>Add to Shopping Cart</button>
        </div>
      )}

      <button onClick={navigateToCart}>View Shopping Cart</button>
      <button onClick={handleClearShoppingCart}>Clear Shopping Cart</button>
    </div>
  );
}

export default PurchasePage;
