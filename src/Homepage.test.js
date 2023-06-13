import { render } from "@testing-library/react";
import Homepage from "./Homepage";

const TEST_USER = {
  username: "test-username",
};

describe("Homepage", function () {
  it("renders without crashing", function () {
    render(<Homepage user={TEST_USER} />);
  });
  it("matches snapshot", function () {
    const { container } = render(<Homepage user={TEST_USER} />);
    expect(container).toMatchSnapshot();
  });
  it("Displays the name of the application on the page", function () {
    const { container } = render(<Homepage user={TEST_USER} />);
    expect(container.querySelector(".Homepage-title").innerHTML).toEqual(
      "Jobber the Hutt"
    );
  });
  it("Displays a welcome message with the user's username if they are logged in", function () {
    const { container } = render(<Homepage user={TEST_USER} />);
    expect(container.querySelector(".Homepage-welcome").innerHTML).toEqual(
      "Welcome, test-username!"
    );
  });
  it("Does not display the company slogan if the user is logged in", function () {
    const { container } = render(<Homepage user={TEST_USER} />);
    expect(container.querySelector(".Homepage-slogan")).not.toBeInTheDocument();
  });
  it("Displays the company slogan if there is no logged in user provided", function () {
    const { container } = render(<Homepage />);
    expect(
      container.querySelector(".Homepage-welcome")
    ).not.toBeInTheDocument();
  });
  it("Does not display a welcome message if there is no logged in user", function () {
    const { container } = render(<Homepage />);
    expect(container.querySelector(".Homepage-slogan").innerHTML).toEqual(
      "Find Your Dream Job"
    );
  });
});
