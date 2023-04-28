import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/** Signup Form
 *
 * Props:
 *       - handleLogin: Func def passed from app.js
 *
 * State:
 *       - FormData: {username, password, firstName, lastName, email}
 *       - ApiError: {isError, errorMessage}
 *
 * App -> LoginForm
 *
 */

function LoginForm({ handleLogin }) {
  /** Handles keystrokes in searchbar and updates formData */
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [apiError, setApiError] = useState({
    isError: false,
    errorMessage: "",
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData((currData) => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  /** Navigates to signup page if successfully logged in, else shows error msg*/
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await handleLogin(formData);
      navigate("/");
    } catch (err) {
      setApiError({
        isError: true,
        errorMessage: err,
      });
    }
  }

  // add login function

  return (
    <div className="LoginForm mb-4 d-flex pt-4">
      <h1 className="LoginForm-Message">Login</h1>
      <form className="LoginForm-Form" onSubmit={handleSubmit}>
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
              type="password"
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
      {apiError.isError && <p>{apiError.errorMessage}</p>}
    </div>
  );
}

export default LoginForm;
