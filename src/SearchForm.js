import React, { useState } from "react";

const placeholderForm = { term: "" };

/** SearchForm (Write docstring)
 *
 * Props: initialFormData: {term: ""} handleSearch: Func def passed down.
 * State: FormData: {term: ""} OR {name: ""}
 *
 * CompanyList -> SearchForm
 * JobList -> SearchForm
 */

function SearchForm({ initialFormData = placeholderForm, handleSearch }) {
  const [formData, setFormData] = useState(initialFormData);

  //TODO: Write docstring
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData((currData) => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }
  // TODO: Write docstring
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData.term);
  }
  return (
    <div className="SearchForm mb-4">
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center justify-content-lg-start gx-0">
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
            <button className="btn btn-lg btn-primary">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
