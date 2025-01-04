import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function RegistrationForm() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Option:", selectedOption);
  };

  return (
    <div className="container mt-5">
      {/* Step Indicator */}
      <div className="d-flex justify-content-between align-items-center mb-4 border border-success rounded p-4">
        <span className="text-success">1. Select your expertise</span>
        <span className="text-muted">2. Client Details</span>
        <span className="text-muted">3. Company Address</span>
        <span className="text-muted">4. Fit to Work</span>
        <span className="text-muted">5. Onboarding Form Complete</span>
      </div>

      <div className="card shadow-lg">
        <div className="card-header bg-light text-center">
          <h5 className="text-success">Thank you for choosing to partner with Taurqo.</h5>
        </div>
        <div className="card-body">
          <p className="text-muted">
            To ensure a successful partnership, please follow the Taurqo registration process:
          </p>
          <p>
            <strong>Complete the Registration Form:</strong> Fill out the required details for our initial due diligence to ensure you are placed with the correct team and area of Taurqo.
          </p>
          <p>
            <strong>Onboarding with Taurqo:</strong> A Taurqo team member will guide you through the platform and ensure you are properly onboarded with the right support and resources.
          </p>

          <form onSubmit={handleSubmit} className="mt-4">
            <h6 className="mb-3">Select your size of business</h6>
            <div className="list-group">
              <div className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="businessSize"
                    id="individualAgency"
                    value="Individual Agency"
                    onChange={handleOptionChange}
                  />
                  <label className="form-check-label" htmlFor="individualAgency">
                    <strong>Individual Agency</strong>
                  </label>
                  <p className="text-muted small mt-1">
                    This option is for solo estate agents or realtors operating independently. Individuals often manage a limited portfolio of properties and require tailored services to support their specific needs in property marketing, inspections, and valuations.
                  </p>
                </div>
              </div>

              <div className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="businessSize"
                    id="corporateAccount"
                    value="Corporate Account"
                    onChange={handleOptionChange}
                  />
                  <label className="form-check-label" htmlFor="corporateAccount">
                    <strong>Corporate Account</strong>
                  </label>
                </div>
              </div>

              <div className="list-group-item">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="businessSize"
                    id="mediumEnterprise"
                    value="Medium Enterprise"
                    onChange={handleOptionChange}
                  />
                  <label className="form-check-label" htmlFor="mediumEnterprise">
                    <strong>Medium Enterprise</strong>
                  </label>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-success px-5">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
