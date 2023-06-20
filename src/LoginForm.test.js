import SignupForm from "./SignupForm";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

function testHandleSignup() {
  console.log("Called testHandleSearch");
}

testHandleSignup = jest.fn();

describe("SignupForm Component", function () {
  it("renders without crashing", async function () {
    await act(async () =>
      render(
        <MemoryRouter>
          <SignupForm handleSignup={testHandleSignup} />
        </MemoryRouter>
      )
    );
  });

  it("matches snapshot", async function () {
    const { container } = await act(async () =>
      render(
        <MemoryRouter>
          <SignupForm handleSignup={testHandleSignup} />
        </MemoryRouter>
      )
    );

    expect(container).toMatchSnapshot();
  });

  it("Dynamically updates the value of the search box with current input", async function () {
    const { container } = await act(async () =>
      render(
        <MemoryRouter>
          <SignupForm handleSignup={testHandleSignup} />
        </MemoryRouter>
      )
    );

    const inputIds = [
      "username",
      "password",
      "first-name",
      "last-name",
      "email",
    ];
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

  it("Allows a user to signup with valid credentials", async function () {
    const { container } = await act(async () =>
      render(
        <MemoryRouter>
          <SignupForm handleSignup={testHandleSignup} />
        </MemoryRouter>
      )
    );

    const inputFields = {
      username: container.querySelector("#username"),
      password: container.querySelector("#password"),
      "first-name": container.querySelector("#first-name"),
      "last-name": container.querySelector("#last-name"),
      email: container.querySelector("#email"),
    };

    const submitBtn = container.querySelector(".search-btn");

    function fillOutField(fieldName, value) {
      fireEvent.change(inputFields[fieldName], {
        target: { value: value },
      });
    }

    // Fill out the form
    fillOutField("username", "username");
    fillOutField("password", "password");
    fillOutField("first-name", "firstName");
    fillOutField("last-name", "lastName");
    fillOutField("email", "test@test.com");

    fireEvent.click(submitBtn);

    expect(testHandleSignup).toHaveBeenCalled();
  });

  // it("Throws an error if the user inputs incorrect data", function () {
  //   const { container } = render(
  //     <MemoryRouter>
  //       <SignupForm handleSignup={testHandleSignup} />
  //     </MemoryRouter>
  //   );

  //   const inputFields = {
  //     username: container.querySelector("#username"),
  //     password: container.querySelector("#password"),
  //     "first-name": container.querySelector("#first-name"),
  //     "last-name": container.querySelector("#last-name"),
  //     email: container.querySelector("#email"),
  //   };

  //   const submitBtn = container.querySelector(".search-btn");

  //   function fillOutField(fieldName, value) {
  //     fireEvent.change(inputFields[fieldName], {
  //       target: { value: value },
  //     });
  //   }

  //   // Fill out the form
  //   fillOutField("username", "");
  //   fillOutField("password", "password");
  //   fillOutField("first-name", "firstName");
  //   fillOutField("last-name", "lastName");
  //   fillOutField("email", "test@test.com");

  //   fireEvent.click(submitBtn);

  //   expect(testHandleSignup).toHaveBeenCalled();
  // });
});
