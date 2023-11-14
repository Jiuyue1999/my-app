import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import StepProgressBar from './StepProgressBar';

const steps = [
  { label: 'Purchase', status: 'inactive' },
  { label: 'Cart', status: 'active' },
  { label: 'Payment', status: 'inactive' },
  { label: 'Shipping', status: 'inactive' },
  { label: 'Checkout', status: 'inactive' },
  { label: 'Finish', status: 'inactive' },
];

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + Number(item.book.price) * item.quantity, 0);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Shopping Cart</h1>
      <StepProgressBar currentStep={1} steps={steps} />
      <ul className="list-group">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item">
            <div className="row">
              <div className="col-md-8">
                <h4>{item.book.title}</h4>
                <p>Author: {item.book.author}</p>
                <p>Price: ${Number(item.book.price).toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="col-md-4 text-right">
                <h4>${(Number(item.book.price) * item.quantity).toFixed(2)}</h4>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mt-4">Total Price: ${calculateTotalPrice().toFixed(2)}</h2>

      {/* Add a "Checkout" button that links to the payment entry page */}
      <Link to="/paymentEntry" className="btn btn-primary mt-4">
        Checkout
      </Link>
    </div>
  );
}

export default Cart;
