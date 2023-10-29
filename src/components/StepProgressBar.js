import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const steps = ['Purchase', 'Cart', 'Payment', 'Shipping', 'Checkout', 'Finish'];

function StepProgressBar({ currentStep }) {
  return (
    <div>
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default StepProgressBar;
