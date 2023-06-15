import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ApplicationForm.css";
import { useContext } from "react";
import userContext from "./userContext.js";

/** Application Form
 *
 * Props:
 *       - handleSignup: Func def passed from app.js
 *
 * State:
 *       - FormData: {username, password, resume, coverLetter, email}
 *       - ApiError: {isError, errorMessage}
 *
 * App -> SignupForm
 *
 */

function ApplicationForm({ handleApplication, job }) {
  const { user } = useContext(userContext);
  const [formData, setFormData] = useState({
    fullName: "",
    location: "",
    resume: "",
    coverLetter: "",
    salaryExpectation: "",
    email: "",
  });

  const [apiError, setApiError] = useState({
    isError: false,
    errorMessage: "",
  });

  const navigate = useNavigate();

  /** Handles keystrokes in searchbar and updates formData */
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
      await handleApplication(formData, user);
      navigate("/");
    } catch (err) {
      console.log(err);
      setApiError({
        isError: true,
        errorMessage: err,
      });
    }
  }

  return (
    <div className="SignupForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1 className="SignupForm-Message">Apply to Job</h1>
        <div className="card">
          <div className="card-body">
            <form className="SignupForm-Form" onSubmit={handleSubmit}>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                className="form-control form-control-lg"
                onChange={handleChange}
                value={formData.fullName}
                aria-label="fullName"
                placeholder="Full Name"
                required
              />
              <label htmlFor="location">location</label>
              <input
                id="location"
                name="location"
                className="form-control form-control-lg"
                onChange={handleChange}
                value={formData.location}
                aria-label="location"
                type="location"
                placeholder="Location"
                required
              />
              <label htmlFor="resume">Resume</label>
              <input
                id="first-name"
                type="file"
                name="resume"
                className="form-control form-control-lg"
                onChange={handleChange}
                value={formData.resume}
                aria-label="resume"
                placeholder="Resume"
                required
              />
              <label htmlFor="coverLetter">Cover Letter</label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                className="form-control form-control-lg"
                onChange={handleChange}
                value={formData.coverLetter}
                placeholder="Cover Letter"
                aria-label="coverLetter"
                required
              ></textarea>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                className="form-control form-control-lg"
                onChange={handleChange}
                value={formData.email}
                placeholder="Email"
                aria-label="email"
                required
              />
              <label htmlFor="salaryExpectation">Salary Expectation</label>
              <input
                id="salaryExpectation"
                name="salaryExpectation"
                className="form-control form-control-lg"
                onChange={handleChange}
                value={formData.salaryExpectation}
                placeholder="Salary Expectation"
                aria-label="salaryExpectation"
                required
              />
              <div className="SignupForm-button d-grid">
                <button className="btn search-btn btn-lg btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {apiError.isError && <p>{apiError.errorMessage}</p>}
      </div>
    </div>
  );
}

export default ApplicationForm;
