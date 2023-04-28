import React, { useState } from "react";
import { useContext } from "react";
import userContext from "./userContext";

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

  console.log(user, "USER IN PROFILEFORM")

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
    <div className="ProfileForm mb-4 d-flex pt-4">
      <h1 className="ProfileForm-Message">Update Profile</h1>
      <form className="ProfileForm-Form" onSubmit={handleSubmit}>
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
            <div className="col-auto">
              <button className="btn search-btn btn-lg btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
