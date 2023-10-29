import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StepProgressBar from './StepProgressBar';
const steps = [
    { label: 'Purchase', status: 'inactive' },
    { label: 'Cart', status: 'inactive' },
    { label: 'Payment', status: 'inactive' },
    { label: 'Shipping', status: 'inactive' },
    { label: 'Checkout', status: 'inactive' },
    { label: 'Finish', status: 'active' },
  ];
function Finish() {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
        <StepProgressBar
        currentStep={6} 
        steps={steps}
        // You can customize the step bar's appearance here
      />
          <h1>Order Successful</h1>
        </div>
        <div className="card-body">
          <p>Congratulations! Your order has been successfully placed.</p>
          <p>Thank you for choosing our products.</p>
        </div>
        <div className="card-footer">
          <Link to="/purchase" className="btn btn-secondary">Back to Purchase Page</Link>
        </div>
      </div>
    </div>
  );
}

export default Finish;
