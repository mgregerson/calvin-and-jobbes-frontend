import React from "react";

function SignupForm({ handleSubmit }) {

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

  // add signup function

  return;

}

export default SignupForm;