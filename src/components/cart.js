import React from 'react';

function Cart({ cart =[]}) {
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>${(product.price * product.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ${calculateTotalPrice().toFixed(2)}</p>
    </div>
  );
}

export default Cart;
