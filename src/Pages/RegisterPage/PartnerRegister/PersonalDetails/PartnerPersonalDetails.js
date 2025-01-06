import React from "react";

const PartnerPersonalDetails = () => {
  return (
    <div className="form-content">
      <h2>Personal Details</h2>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              placeholder="First name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <select id="title">
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth *</label>
            <input
              type="date"
              id="dob"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gender">Gender *</label>
            <select id="gender" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              placeholder="hello@email.com"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              placeholder="Add your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="proofOfIdentity">Proof of Identity *</label>
            <input
              type="file"
              id="proofOfIdentity"
              accept="image/*"
              required
            />
            <small>
              Please provide a clear picture of an official ID, such as a
              Driver's License or Passport.
            </small>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PartnerPersonalDetails;
