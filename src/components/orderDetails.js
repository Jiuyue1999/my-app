import React from 'react';
import { Link } from 'react-router-dom';
import StepProgressBar from './StepProgressBar';

const steps = [
  { label: 'Purchase', status: 'inactive' },
  { label: 'Cart', status: 'inactive' },
  { label: 'Payment', status: 'inactive' },
  { label: 'Shipping', status: 'inactive' },
  { label: 'Checkout', status: 'active' },
  { label: 'Finish', status: 'inactive' },
];

function clearShoppingCart() {
  // Clear the shopping cart by clearing the session storage
  sessionStorage.clear();
}

function OrderDetailsPage() {
  // Retrieve cart data from session storage
  const cartData = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];

  // Combine cart data with additional fields
  const updatedPurchaseData = cartData.map((item) => ({
    productName: item.book.title,
    productPrice: item.book.price,
    productQuantity: item.quantity,
    author: item.book.author,
  }));

  const paymentData = JSON.parse(sessionStorage.getItem('paymentData')) || {
    firstName: 'Default First Name',
    lastName: 'Default Last Name',
    cardNumber: 'Default Card Number',
    expirationDate: 'Default Expiration Date',
    cvv: 'Default CVV',
  };

  const shipmentData = JSON.parse(sessionStorage.getItem('shipmentData')) || {
    firstName: 'Default First Name',
    lastName: 'Default Last Name',
    addressLine1: 'Default Address Line 1',
    addressLine2: 'Default Address Line 2',
    phoneNumber: 'Default Phone Number',
    state: 'Default State',
    zipCode: 'Default Zip Code',
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Order Details</h1>
      <StepProgressBar currentStep={4} steps={steps} />

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Purchase Data</div>
            <div className="card-body">
              {updatedPurchaseData.map((purchaseItem, index) => (
                <div key={index}>
                  <p>Product Name: {purchaseItem.productName}</p>
                  <p>Author: {purchaseItem.author}</p>
                  <p>Product Price: {purchaseItem.productPrice}</p>
                  <p>Product Quantity: {purchaseItem.productQuantity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Payment Data</div>
            <div className="card-body">
              <p>Card Holder Name: {paymentData.firstName} {paymentData.lastName}</p>
              <p>Card Number: {paymentData.cardNumber}</p>
              <p>Expiration Date: {paymentData.expirationDate}</p>
              <p>CVV: {paymentData.cvv}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Shipment Data</div>
            <div className="card-body">
              <p>Name: {shipmentData.firstName} {shipmentData.lastName}</p>
              <p>Address Line 1: {shipmentData.addressLine1}</p>
              <p>Address Line 2: {shipmentData.addressLine2}</p>
              <p>Phone Number: {shipmentData.phoneNumber}</p>
              <p>State: {shipmentData.state}</p>
              <p>Zip Code: {shipmentData.zipCode}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/purchase" className="btn btn-secondary mr-2">
          Back to Purchase Page
        </Link>
        <span style={{ margin: '0 10px' }}></span>
        <Link to="/finish" className="btn btn-primary" onClick={clearShoppingCart}>
          Place Order
        </Link>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
