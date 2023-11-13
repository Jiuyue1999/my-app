import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import StepProgressBar from './StepProgressBar';

const steps = [
  { label: 'Purchase', status: 'active' },
  { label: 'Cart', status: 'inactive' },
  { label: 'Payment', status: 'inactive' },
  { label: 'Shipping', status: 'inactive' },
  { label: 'Checkout', status: 'inactive' },
  { label: 'Finish', status: 'inactive' },
];

function PurchasePage() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://iwy1snnfcb.execute-api.us-east-1.amazonaws.com/prod/products')
      .then(response => response.json())
      .then(data => {
        // Update the books state with the fetched data
        setBooks(data.products);
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
      const existingItemIndex = existingCart.findIndex((item) => item.book.productId === selectedBook.productId);

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
    <div className="container">
      <h1 className="mt-4">Purchase Page</h1>
      <StepProgressBar
        currentStep={0}
        steps={steps}
      />
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Available Books</h2>
          <ul className="list-group">
            {books.map((book) => (
              <li key={book.productId} className="list-group-item">
                <button className="btn btn-link" onClick={() => handleBookSelect(book)}>
                  {book.title} (${Number(book.price).toFixed(2)})
                </button>
              </li>
            ))}
          </ul>
        </div>

        {selectedBook && (
          <div className="col-md-6">
            <div className="selected-book mt-4">
              <h2>Selected Book</h2>
              <p>Title: {selectedBook.title}</p>
              <p>Author: {selectedBook.author}</p>
              <p>Price: ${Number(selectedBook.price).toFixed(2)}</p>
              <p>
                Quantity:
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  className="form-control"
                />
              </p>
              <button className="btn btn-primary" onClick={handleAddToCart}>Add to Shopping Cart</button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4">
        <button className="btn btn-primary" onClick={() => {navigateToCart();}}>View Shopping Cart</button>
        <span style={{ margin: '0 10px' }}></span>
        <button className="btn btn-danger" onClick={handleClearShoppingCart}>Clear Shopping Cart</button>
      </div>
    </div>
  );
}

export default PurchasePage;
