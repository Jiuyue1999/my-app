// SmallPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function SmallPage() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to Our Book Store</h1>

      <section className="mb-3">
        <h2>About Us</h2>
        <p>Information about us.</p>
        <Link to="/about" className="btn btn-primary">About Us</Link>
      </section>
      <section className="mb-3">
        <h2>Book Store</h2>
        <p>Information about Book Store.</p>
        <Link to="/home" className="btn btn-primary">Home</Link>
      </section>

      <section className="mb-3">
        <h2>Purchase</h2>
        <p>Details of products or services available for purchase.</p>
        <Link to="/purchase" className="btn btn-primary">Purchase</Link>
      </section>

      <section className="mb-3">
        <h2>Shopping Cart</h2>
        <p>Items in your shopping cart.</p>
        <Link to="/cart" className="btn btn-primary">Shopping Cart</Link>
      </section>
    </div>
  );
}

export default SmallPage;
