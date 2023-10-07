import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.book.price * item.quantity, 0);
  };

  return (
    <div className="scroll-container">
      <h1>Shopping Cart</h1>

      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <p>Title: {item.book.title}</p>
            <p>Author: {item.book.author}</p>
            <p>Price: ${item.book.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>

      <h2>Total Price: ${calculateTotalPrice().toFixed(2)}</h2>
    </div>
  );
}

export default Cart;
