import React, { useState } from "react";

function LoginForm({ handleSubmit }) {
  /** Handles keystrokes in searchbar and updates formData */
  const [formData, setFormData] = useState({})
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData((currData) => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  // add login function

  return;
}

export default LoginForm;