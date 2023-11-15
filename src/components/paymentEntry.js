import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import StepProgressBar from './StepProgressBar';

const steps = [
  { label: 'Purchase', status: 'inactive' },
  { label: 'Cart', status: 'inactive' },
  { label: 'Payment', status: 'active' },
  { label: 'Shipping', status: 'inactive' },
  { label: 'Checkout', status: 'inactive' },
  { label: 'Finish', status: 'inactive' },
];

function PaymentEntry() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();

    const paymentData = {
      firstName,
      lastName,
      cardNumber,
      expirationDate,
      cvv,
    };

    try {
      // Make an HTTP POST request to your AWS Lambda function
      const response = await fetch('https://ss4lpfjlvf.execute-api.us-east-1.amazonaws.com/payment/payment-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        // Payment data sent successfully, navigate to the next page
        sessionStorage.setItem('paymentData', JSON.stringify(paymentData));
        navigate('/shipmentPage');
      } else {
        // Handle error scenarios
        console.error('Error sending payment data:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending payment data:', error.message);
    }
  };

  return (
    <div className="container mt-4">
      <StepProgressBar currentStep={2} steps={steps} />
      <div className="card">
        <div className="card-header">
          <h1>Checkout</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handlePayment}>
            <div className="form-group col-md-2">
              <input
                type="text"
                id="firstName"
                className="form-control"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-md-2">
              <input
                type="text"
                id="lastName"
                className="form-control"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-md-5">
              <input
                type="text"
                id="cardNumber"
                className="form-control"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <input
                  type="text"
                  id="expirationDate"
                  className="form-control"
                  placeholder="Expiration Date"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-md-1">
                <input
                  type="text"
                  id="cvv"
                  className="form-control"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Proceed to Shipping
            </button>
          </form>
        </div>
        <div className="card-footer">
          <Link to="/purchase" className="btn btn-secondary">
            Go Back to Purchase Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentEntry;
