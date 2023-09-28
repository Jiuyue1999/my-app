import React from 'react';
import { Link } from 'react-router-dom';

function OrderDetailsPage() {
  // Retrieve data from session storage
  const purchaseData = JSON.parse(sessionStorage.getItem('purchaseData')) || {
    productName: 'Default Product Name',
    productPrice: 'Default Product Price',
    productQuantity: 'Default Product Quantity',
  };
  console.log('Purchase Data:', purchaseData);
  const paymentData = JSON.parse(sessionStorage.getItem('paymentData')) || {
    cardHolderName: 'Default Card Holder Name',
    cardNumber: 'Default Card Number',
    ExpirationDate: 'Default Expiration Date',
    cvv: 'Default cvv'
  };
  console.log('Payment Data:', paymentData);
  
  const shipmentData = JSON.parse(sessionStorage.getItem('shipmentData')) || {
    name:'Default Name',
    addressLine1: 'Default Address Line 1',
    addressLine2: 'Default Address Line 2',
    phoneNumber: 'Default phone number',
    state: 'Default State',
    zipCode: 'Defacult Zip code'
  };
  console.log('Shipment Data:', shipmentData);

  return (
    <div>
      <h1>Order Details Page</h1>

      <div>
        <h2>Purchase Data:</h2>
        <p>Product Name: {purchaseData.productName}</p>
        <p>Product Price: {purchaseData.productPrice}</p>
        <p>Product Quantity: {purchaseData.productQuantity}</p>
      </div>

      <div>
        <h2>Payment Data:</h2>
        <p>Card Holder Name: {paymentData.cardHolderName}</p>
        <p>Card Number: {paymentData.cardNumber}</p>
        <p>Expiration Date: {paymentData.expirationDate}</p>
        <p>CVV: {paymentData.cvv}</p>
      </div>

      <div>
        <h2>Shipment Data:</h2>
        <p>Name: {shipmentData.name}</p>
        <p>Address Line 1: {shipmentData.addressLine1}</p>
        <p>Address Line 2: {shipmentData.addressLine2}</p>
        <p>Phone Number: {shipmentData.phoneNumber}</p>
        <p>State: {shipmentData.state}</p>
        <p>Zip Code: {shipmentData.zipCode}</p>
      </div>

  
    </div>
  );
}

export default OrderDetailsPage;
