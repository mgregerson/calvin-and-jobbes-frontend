import React, { useState } from "react";

function ProfileForm({ initialFormData, handleSubmit }) {
  const [formData, setFormData] = useState(initialFormData);

  /** Handles keystrokes in searchbar and updates formData */
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData((currData) => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  // add edit function

  return;
}

export default ProfileForm;