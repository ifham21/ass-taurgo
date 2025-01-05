import React, { useState } from "react";
import "./Multi.css";
import ProgressBar from "../ProgressBar-Component/ProgressBar";
import ExpertiseSelection from "./ExpertiseSelection/ExpertiseSelection";
import OrganisationDetails from "./OrganisationDetails/OrganisationDetails";
import CompanyAddress from "./CompanyAddress/CompanyAddress";
import CompanyInformation from "./CompanyInformation/CompanyInformation";

const MultiStepForm = () => {
  const [currentStep, setStep] = useState(2);

  const nextStep = () => {
    if (currentStep < 5) setStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setStep(currentStep - 1);
  };

  const steps = [
    "Select your expertise",
    "Personal Details",
    "Current address",
    "Fit to work",
    "Onboarding Form Complete",
  ];

  return (
    <div>
      {/* Progress Bar */}
      <div className="multi-step-form">
        <ProgressBar currentStep={currentStep} />
      </div>

      <div className="step-selection">
        {/* Step Content 1 */}
        {currentStep == 1 && <ExpertiseSelection />}

        {/* Step Content 2 */}
        {currentStep === 2 && <OrganisationDetails />}

        {/* Step Content 3 */}
        {currentStep === 3 && <CompanyAddress />}

        {/* Step Content 4 */}
        {currentStep === 4 && <CompanyInformation />}

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
