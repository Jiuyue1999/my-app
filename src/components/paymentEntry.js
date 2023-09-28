import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function PaymentEntry() {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();  const handlePayment = (e) => {
    e.preventDefault();

    // Perform payment processing logic here
    // You can implement payment processing functionality

    // After payment processing, you can clear form fields or show a confirmation message
    setCardHolderName('');
    setCardNumber('');
    setExpirationDate('');
    setCvv('');
    const paymentData = { cardHolderName, cardNumber, expirationDate,cvv};
    sessionStorage.setItem('paymentData', JSON.stringify(paymentData));
    navigate('/shipmentPage');
  };

  return (
    <div>
      <h1>Payment Entry</h1>
      <form onSubmit={handlePayment}>
        <label htmlFor="cardHolderName">Card Holder Name:</label>
        <input
          type="text"
          id="cardHolderName"
          value={cardHolderName}
          onChange={(e) => setCardHolderName(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="expirationDate">Expiration Date:</label>
        <input
          type="text"
          id="expirationDate"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        /><br /><br />
      <button type="submit">Proceed to Shipping</button>
      </form>
      <br /><br />
      <Link to="/purchase">Go Back to Purchase Page</Link>
    </div>
  );
}

export default PaymentEntry;
