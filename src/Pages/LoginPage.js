import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleRegisterNavigation = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo">
          <img src="/path-to-logo.png" alt="Logo" />
          <h1>Taurgo</h1>
        </div>
        <h2>Log in</h2>
        <p>Welcome back!</p>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
          <div className="options">
            <label>
              <input type="checkbox" />
              Remember for 30 days
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button type="submit" className="btn">Sign in</button>
        </form>
        <p>
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
