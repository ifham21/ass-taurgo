import React from "react";
import "./RegistrationSuccess.css";
import { useNavigate } from 'react-router-dom';
import image from "../../../taurgo-logo.png";
import { FaCheck } from 'react-icons/fa';

const RegistrationSuccess = () => {

    const navigate = useNavigate();

    const handleFinish = () => {
      navigate('/login');
  };

  return (
    <div className="registration-success">
      <div className="logo-container">
        <img src={image} alt="Tauro Logo" className="logo" />
      </div>

      <div className="message">
        <p className="title">Thank You!</p>
        <p className="subtitle">You have completed the registration process</p>
      </div>

      <div className="checkmark-container">
        <div className="checkmark">
          <FaCheck  />
        </div>
      </div>

      <button className="ok-button" onClick={handleFinish}>OK</button>
    </div>
  );
};

export default RegistrationSuccess;
