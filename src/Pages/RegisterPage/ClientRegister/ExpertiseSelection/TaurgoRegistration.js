import React from "react";
import "./TaurgoRegistration.css";

const TaurgoRegistration = () => {
  return (
    <div className="registration-container">
      <div className="headerContent">
        <p>Thank you for choosing to partner with Taurgo</p>
      </div>
      <div>
        <p><b>To ensure a successful partnership, please follow the Taurgo registration process</b></p>
        <div className="contents">
          <p>Complete the Registration Form:</p>
          <p>
            Fill out the required details on the Taurgo registration page. This information is
            essential for our initial due diligence to ensure you are placed within the correct team
            and area of Taurgo.
          </p>

          <p>Onboarding with Taurgo:</p>
          <p>
            After submitting the registration form, a member of the Taurgo team will reach out to
            you to complete the onboarding process. They will guide you through the next steps and
            ensure you are properly onboarded with the right team and resources.
          </p>

          <p>Verification and Placement:</p>
          <p>
            Taurgo will review the information provided during registration and complete their
            initial due diligence. This will determine the appropriate team and area within Taurgo
            for your partnership with the You.com Smart Assistant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaurgoRegistration;
