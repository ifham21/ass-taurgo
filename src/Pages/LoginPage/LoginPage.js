import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import image from '../taurgo-logo.png';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleRegisterNavigation = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo">
          <img src={image} alt="Logo" />
        </div>
        <h1>Log in</h1>
        <p className="welcome">Welcome back!</p>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
          <div className="options">
            <label>
              <input type="checkbox" />
              <span className="text">Remember for 30 days</span> 
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="btn">Sign in</button>
        </form>
        <p className="lastLine">
          Don’t have an account?{" "}
          <span onClick={handleRegisterNavigation} className="register-link">
            Register
          </span>
        </p>
      </div>
      <div className="image-section"></div>
    </div>
  );
};

export default LoginPage;
