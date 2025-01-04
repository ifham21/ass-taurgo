import React from 'react'
import "./ClientRegister.css";
import image from '../taurgo-logo.png';
import rics from '../rics-logo.png';

const ClientRegister = () => {
  return (
    <div className="register-form">
        <div className="logo">
          <img src={image} alt="Taurgo Logo" />
        </div>
        <div className="button-group">
          <button className="btn btn-client">Register as Client</button>
          <button className="btn btn-partner">Register as Partner</button>
        </div>
        <h2>Create your account</h2>
        <form>
          <label htmlFor="org-reference">Organisation Reference</label>
          <input
            type="text"
            id="org-reference"
            placeholder="Organisation name"
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
          <button type="submit" className="btn btn-register">
            Register
          </button>
        </form>
        <p className='lastLine'>
          I have an Account? <a href="/login">Login</a>
        </p>
        
        <div className="footer">
          <p>© Taurgo</p>
          <p>
            <img src={rics} alt="RICS Logo" />
          </p>
        </div>
      </div>
  )
}

export default ClientRegister