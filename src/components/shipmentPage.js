import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function ShipmentPage() {
  const [name, setName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const navigate = useNavigate();
  const handleShipment = (e) => {
    e.preventDefault();
    const shipmentData = {name,addressLine1, addressLine2, phoneNumber, state, zipCode };
    // Store data in session storage for persistence
    sessionStorage.setItem('shipmentData', JSON.stringify(shipmentData));
    // Navigate to Order Details page
    navigate('/orderDetails');
  };

  return (
    <div>
      <h1>Shipment Page</h1>
      <form onSubmit={handleShipment}>
      <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="addressLine1">Address Line 1:</label>
        <input
          type="text"
          id="addressLine1"
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="addressLine2">Address Line 2:</label>
        <input
          type="text"
          id="addressLine2"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
        /><br /><br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="zipCode">ZIP Code:</label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default ShipmentPage;
