import React from 'react'
import { useNavigate } from 'react-router-dom';

const PartnerRegister = () => {

  const navigate = useNavigate();

  const handleNext = () => {
      navigate('/client-multi');
  };

  return (
    <form>
        <label htmlFor="org-reference">Full Name</label>
        <input
          type="text"
          id="org-reference"
          placeholder="Your Name"
        />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <label htmlFor="repeat-password">Repeat Password</label>
        <input
          type="password"
          id="repeat-password"
          placeholder="Repeat your password"
        />
        <button type="submit" className="btn btn-register" onClick={handleNext}>
          Register
        </button>
    </form>
  )
}

export default PartnerRegister