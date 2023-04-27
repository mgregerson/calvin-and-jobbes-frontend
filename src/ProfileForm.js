import React, { useState } from "react";

function ProfileForm({ currPrefs, handleProfileEdit }) {
  const [formData, setFormData] = useState({
    username: currPrefs.username,
    firstName: currPrefs.firstName,
    lastName: currPrefs.lastName,
    email: currPrefs.email,
  });

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
    handleProfileEdit(formData);
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
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
