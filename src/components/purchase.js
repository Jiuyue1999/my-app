import React, { useState } from 'react';

function PurchasePage() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [purchaseSummary, setPurchaseSummary] = useState(null);

  const handlePurchase = (e) => {
    e.preventDefault();

    // Calculate the total price
    const totalPrice = parseFloat(productPrice) * parseInt(productQuantity);

    // Create a purchase summary object
    const summary = {
      productName,
      totalPrice,
      productQuantity,
    };

    // Set the purchase summary state
    setPurchaseSummary(summary);
  };

  return (
    <div>
      <h1>Purchase Page</h1>
      <form onSubmit={handlePurchase}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          min="0"
          step="0.01"
          required
        /><br /><br />

        <label htmlFor="productQuantity">Number of Products:</label>
        <input
          type="number"
          id="productQuantity"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          min="1"
          required
        /><br /><br />

        <button type="submit">Purchase</button>
      </form>

      {purchaseSummary && (
        <div>
          <h2>Purchase Summary</h2>
          <p><strong>Product Name:</strong> {purchaseSummary.productName}</p>
          <p><strong>Total Price:</strong> ${purchaseSummary.totalPrice.toFixed(2)}</p>
          <p><strong>Quantity:</strong> {purchaseSummary.productQuantity}</p>
        </div>
      )}
    </div>
  );
}

export default PurchasePage;
