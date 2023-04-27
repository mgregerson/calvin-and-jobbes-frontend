import React, { useState } from "react";
import "./SearchForm.css";

const placeholderForm = {};

/** SearchForm (Write docstring)
 *
 * Props:
 *       - initialFormData: {term: ""}
 *       - handleSearch: Func def passed down.
 * State:
 *       - FormData: {term: ""} (CompanyList) OR {name: ""} (JobList)
 *
 * CompanyList -> SearchForm
 * JobList -> SearchForm
 */

function SearchForm({ initialFormData = placeholderForm, handleSearch }) {
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
  /** Calls filter function passed in from parent as prop */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData.term);
  }
  return (
    <div className="SearchForm mb-4 d-flex pt-4">
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center justify-content-lg-start gx-1">
          <div className="col-8">
            <input
              id="search-term"
              name="term"
              className="form-control form-control-lg"
              placeholder="Search"
              onChange={handleChange}
              value={formData.term}
              aria-label="Search"
            />
          </div>
          <div className="col-auto">
            <button className="btn search-btn btn-lg btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
