import React from "react";
import "./ProgressBar.css";

const steps = [
  "Select your expertise",
  "Personal Details",
  "Current address",
  "Fit to work",
  "Onboarding Form Complete",
];

const PartnerProgressBar = ({ currentStep }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        {steps.map((label, index) => {
          const isCompleted = index + 1 < currentStep;
          const isActive = index + 1 === currentStep;

          return (
            <React.Fragment key={index}>
              <div
                className={`step ${isCompleted ? "completed" : ""} ${
                  isActive ? "active" : ""
                }`}
              >
                <div className="circle">{index + 1}</div>
                <span className="label">{label}</span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`separator ${isCompleted ? "completed" : ""}`}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default PartnerProgressBar;
