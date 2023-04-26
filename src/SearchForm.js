import React, { useState } from "react";

const placeholderForm = { term: "" };

function SearchForm({ initialFormData = placeholderForm, handleSearch }) {
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });

  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData.term);
  }
  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <div>
        <input
          id="search-term"
          name="term"
          className="search-form-input"
          placeholder="search"
          onChange={handleChange}
          value={formData.term}
          aria-label="Search"
        />
        <button>Search</button>
      </div>
    </form>
  );
}

export default SearchForm;
