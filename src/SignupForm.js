import React, { useState } from "react";

function SignupForm({ handleSignup }) {
  const [formData, setFormData] = useState({});

  /** Handles keystrokes in searchbar and updates formData */
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData((currData) => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSignup(formData);
  }

  // add signup function
  // username, password, firstname, lastname, email
  return (
    <div className="SignupForm mb-4 d-flex pt-4">
      <h1 className="SignupForm-Message">Sign Up</h1>
      <form className="SignupForm-Form" onSubmit={handleSubmit}>
        <div className="row justify-content-center justify-content-lg-start gx-1">
          <div className="col-8">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              className="form-control form-control-lg"
              onChange={handleChange}
              value={formData.username}
              aria-label="username"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              className="form-control form-control-lg"
              onChange={handleChange}
              value={formData.password}
              aria-label="password"
              required
            />
            <label htmlFor="firstName">First Name</label>
            <input
              id="first-name"
              name="firstName"
              className="form-control form-control-lg"
              onChange={handleChange}
              value={formData.firstName}
              aria-label="firstName"
              required
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="last-name"
              name="lastName"
              className="form-control form-control-lg"
              onChange={handleChange}
              value={formData.lastName}
              aria-label="lastName"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className="form-control form-control-lg"
              onChange={handleChange}
              value={formData.email}
              aria-label="email"
              required
            />
          </div>
          <div className="col-auto">
            <button className="btn search-btn btn-lg btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
