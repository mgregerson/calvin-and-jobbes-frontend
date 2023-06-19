import { render, fireEvent, screen } from "@testing-library/react";
import { useContext } from "react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import userContext from "./userContext";

const testHandleProfileEdit = jest.fn();

describe("ProfileForm Component", () => {
  const mockUser = {
    username: "test-username",
    firstName: "test-firstName",
    lastName: "test-lastName",
    email: "test-email",
  };

  const WrapperComponent = ({ children }) => (
    <userContext.Provider value={{ user: mockUser }}>
      {children}
    </userContext.Provider>
  );

  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <WrapperComponent>
          <ProfileForm handleProfileEdit={testHandleProfileEdit} />
        </WrapperComponent>
      </MemoryRouter>
    );
  });

  it("matches snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <WrapperComponent>
          <ProfileForm handleProfileEdit={testHandleProfileEdit} />
        </WrapperComponent>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("Dynamically updates the value of the search box with current input", function () {
    const { container } = render(
      <MemoryRouter>
        <WrapperComponent>
          <ProfileForm handleProfileEdit={testHandleProfileEdit} />
        </WrapperComponent>
      </MemoryRouter>
    );

    const inputIds = ["first-name", "last-name", "email"];
    const inputFields = inputIds.map((id) => container.querySelector(`#${id}`));

    for (let field of inputFields) {
      fireEvent.change(field, { target: { value: "a" } });
      expect(field.value).toEqual("a");
      fireEvent.change(field, { target: { value: "an" } });
      expect(field.value).toEqual("an");
      fireEvent.change(field, { target: { value: "" } });
      expect(field.value).toEqual("");
    }
  });

  it("Allows a user to update their profile with valid inputs", function () {
    const { container } = render(
      <MemoryRouter>
        <WrapperComponent>
          <ProfileForm handleProfileEdit={testHandleProfileEdit} />
        </WrapperComponent>
      </MemoryRouter>
    );

    const inputIds = ["first-name", "last-name", "email"];
    const inputFields = inputIds.map((id) => container.querySelector(`#${id}`));

    for (let field of inputFields) {
      fireEvent.change(field, { target: { value: "newtest@test.com" } });
      expect(field.value).toEqual("newtest@test.com");
    }
    const submitBtn = container.querySelector(".search-btn");
    fireEvent.click(submitBtn);
    expect(testHandleProfileEdit).toHaveBeenCalled();
  });

  it("Does not allow a user to update their username", function () {
    const { container } = render(
      <MemoryRouter>
        <WrapperComponent>
          <ProfileForm handleProfileEdit={testHandleProfileEdit} />
        </WrapperComponent>
      </MemoryRouter>
    );
    const usernameInput = container.querySelector(`#username`);
    expect(usernameInput).toBeDisabled();
    expect(usernameInput).toHaveValue("test-username");
  });

  it("Does not allow a user to update their email to a non-email type", function () {
    const { container } = render(
      <MemoryRouter>
        <WrapperComponent>
          <ProfileForm handleProfileEdit={testHandleProfileEdit} />
        </WrapperComponent>
      </MemoryRouter>
    );
    const emailInput = container.querySelector("#email");

    fireEvent.change(emailInput, { target: { value: "notavalidemail" } });
    expect(emailInput.value).toEqual("notavalidemail");

    const submitBtn = container.querySelector(".search-btn");
    fireEvent.click(submitBtn);

    // The form will not process, so the user is not navigated to a new page.
    expect(screen.queryByText("Update Profile")).toBeInTheDocument();
  });
});
