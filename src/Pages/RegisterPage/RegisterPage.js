import React from "react";
import "./Register.css";
import ClientRegister from "./ClientRegister/ClientRegister";

const RegisterPage = () => {
  return (
    <div className="register-container">
      <ClientRegister />
      <div className="image-container"></div>
    </div>
  );
};

export default RegisterPage;
