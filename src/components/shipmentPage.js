import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import StepProgressBar from './StepProgressBar';
const steps = [
  { label: 'Purchase', status: 'inactive' },
  { label: 'Cart', status: 'inactive' },
  { label: 'Payment', status: 'inactive' },
  { label: 'Shipping', status: 'active' },
  { label: 'Checkout', status: 'inactive' },
  { label: 'Finish', status: 'inactive' },
];
function ShipmentPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const navigate = useNavigate();
  const handleShipment = (e) => {
    e.preventDefault();
    const shipmentData = { firstName, lastName, addressLine1, addressLine2, phoneNumber, state, zipCode };
    // Store data in session storage for persistence
    sessionStorage.setItem('shipmentData', JSON.stringify(shipmentData));
    // Navigate to Order Details page
    navigate('/orderDetails');
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h1>Shipment Page</h1>
        </div>
        <StepProgressBar
        currentStep={3} 
        steps={steps}
        // You can customize the step bar's appearance here
      />
        <div className="card-body">
          <form onSubmit={handleShipment}>
            <div className="form-row">
              <div className="form-group col-md-4">
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
              <div className="form-group col-md-4">
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
            </div>

            <div className="form-group col-md-4">
              <input
                type="text"
                id="addressLine1"
                className="form-control"
                placeholder="Address Line 1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                required
              />
            </div>

            <div className="form-group col-md-4">
              <input
                type="text"
                id="addressLine2"
                className="form-control"
                placeholder="Address Line 2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />
            </div>

            <div className="form-group col-md-4">
              <input
                type="tel"
                id="phoneNumber"
                className="form-control"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-4">
                <input
                  type="text"
                  id="state"
                  className="form-control"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  id="zipCode"
                  className="form-control"
                  placeholder="ZIP Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShipmentPage;
