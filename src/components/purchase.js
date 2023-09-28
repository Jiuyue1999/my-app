import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function PurchasePage() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [purchaseSummary, setPurchaseSummary] = useState(null);
  const navigate = useNavigate();
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
    const purchaseData = { productName, productPrice, productQuantity };
    // Store data in session storage for persistence
    sessionStorage.setItem('purchaseData', JSON.stringify(purchaseData));
    // Navigate to Payment Entry page
    navigate('/paymentEntry');
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
        <br /><br />
        <button type="submit">Purchase</button>
      </form>

      {purchaseSummary && (
        <div>
          <h2>Purchase Summary</h2>
          <p><strong>Product Name:</strong> {purchaseSummary.productName}</p>
          <br /><br />
          <p><strong>Total Price:</strong> ${purchaseSummary.totalPrice.toFixed(2)}</p>
          <br /><br />
          <p><strong>Quantity:</strong> {purchaseSummary.productQuantity}</p>
        </div>
      )}
      <br /><br />

    </div>
  );
}

export default PurchasePage;
