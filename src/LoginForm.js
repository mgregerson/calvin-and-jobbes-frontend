import React, { useState } from "react";

function LoginForm({ handleLogin }) {
  /** Handles keystrokes in searchbar and updates formData */
  const [formData, setFormData] = useState({});
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
    handleLogin(formData);
  }

  // add login function

  return (
    <div className="Login mb-4 d-flex pt-4">
      <h1 className="Login-Message">Login</h1>
      <form className="Login-Form" onSubmit={handleSubmit}>
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
            <div className="col-auto">
              <button className="btn search-btn btn-lg btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
