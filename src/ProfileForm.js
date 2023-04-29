import React, { useState } from "react";
import { useContext } from "react";
import userContext from "./userContext";
import "./ProfileForm.css";

/** ProfileForm
 *
 * Props:
 *       - handleProfileEdit: function passed down from App.
 *
 * State:
 *       - formData: Object with Form Data ({username, firstName, lastName, email})
 *
 * Renders a form so that a current user can edit their profile.
 */

function ProfileForm({ handleProfileEdit }) {
  // USE CONTEXT OF USER: SET CURR FORM DATA TO USERNAME, FIRSTNAME, LASTNAME, EMAIL
  const { user } = useContext(userContext);
  const [formData, setFormData] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  console.log(user, "USER IN PROFILEFORM");

  /** Handles keystrokes in searchbar and updates formData */
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData((currData) => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }
  /** handleSubmit of the form. Call function in props */
  function handleSubmit(evt) {
    evt.preventDefault();
    const updateData = formData;
    delete updateData.username;
    console.log(formData, "THE FORM DATA IN PROFILE");
    handleProfileEdit(user.username, updateData);
  }

  return (
    <div className="pt-5">
      <div className="ProfileForm col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h3 className="ProfileForm-message">Update Profile</h3>
        <div className="card">
          <div className="card-body">
            <form className="ProfileForm-Form" onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                className="form-control form-control-lg"
                onChange={handleChange}
                value={formData.username}
                aria-label="username"
                disabled
              />
              <label htmlFor="firstName">First Name</label>
              <input
                id="first-name"
                name="firstName"
                className="form-control form-control-lg"
                onChange={handleChange}
                value={formData.firstName}
                required
                aria-label="firstName"
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
              <div className="ProfileForm-button">
                <button className="btn search-btn btn-lg btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
