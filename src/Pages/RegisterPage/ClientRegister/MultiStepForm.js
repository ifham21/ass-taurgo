import React, { useState } from 'react';
import './Multi.css';
import ProgressBar from '../ProgressBar';
import ExpertiseSelection from './ExpertiseSelection/ExpertiseSelection';

const MultiStepForm = () => {
  const [currentStep, setStep] = useState(2);

  const nextStep = () => {
    if (currentStep < 5) setStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setStep(currentStep - 1);
  };

  const steps = [
    'Select your expertise',
    'Personal Details',
    'Current address',
    'Fit to work',
    'Onboarding Form Complete',
  ];

  return (
    <div>
      {/* Progress Bar */}
      <div className="multi-step-form">
        <ProgressBar currentStep={currentStep} />
      </div>
      

      <div className="step-selection">
        {/* Step Content 1 */}
        {currentStep == 1 && (
          <ExpertiseSelection />
        )}

        {/* Step Content */}
        {currentStep === 2 && (
          <div className="form-content">
            <h2>Organisation Details</h2>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companyName">Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Enter company name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter full name"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="hello@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="form-navigation">
          {currentStep > 1 && <button onClick={prevStep}>Previous</button>}
          {currentStep < 5 && <button onClick={nextStep}>Next</button>}
        </div>
      </div>
      
    </div>
  );
};

export default MultiStepForm;
