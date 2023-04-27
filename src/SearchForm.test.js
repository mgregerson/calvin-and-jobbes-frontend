import SearchForm from "./SearchForm";
import { render, fireEvent } from "@testing-library/react";

function testHandleSearch() {
  console.log("Called testHandleSearch");
}

const testInitialFormData = {
  term: "",
};

testHandleSearch = jest.fn();

describe("SearchForm Component", function () {
  it("renders without crashing", function () {
    render(
      <SearchForm
        initialFormData={testInitialFormData}
        handleSearch={testHandleSearch}
      />
    );
  });

  it("matches snapshot", function () {
    const { container } = render(
      <SearchForm
        initialFormData={testInitialFormData}
        handleSearch={testHandleSearch}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("Searches for a company or job", function () {
    const { container } = render(
      <SearchForm
        initialFormData={testInitialFormData}
        handleSearch={testHandleSearch}
      />
    );
    const searchInput = container.querySelector("#search-term");
    const submitBtn = container.querySelector(".search-btn");
    // Fill out the form
    fireEvent.change(searchInput, { target: { value: "and" } });
    fireEvent.click(submitBtn);
    // Search Submitted!
    expect(testHandleSearch).toHaveBeenCalled();
  });

  it("Dynamically updates the value of the search box with current input", function () {
    const { container } = render(
      <SearchForm
        initialFormData={testInitialFormData}
        handleSearch={testHandleSearch}
      />
    );
    const searchInput = container.querySelector("#search-term");
    const submitBtn = container.querySelector(".search-btn");
    // Fill out the form with one letter. Check that the value has changed
    fireEvent.change(searchInput, { target: { value: "a" } });
    expect(searchInput.value).toEqual("a");
    // Fill out with another letter. Check that it has changed again.
    fireEvent.change(searchInput, { target: { value: "an" } });
    expect(searchInput.value).toEqual("an");
    // Remove everything, check that it has changed.
    fireEvent.change(searchInput, { target: { value: "" } });
    expect(searchInput.value).toEqual("");
  });
});
