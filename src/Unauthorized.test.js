import { render } from "@testing-library/react";
import Unauthorized from "./Unauthorized";

describe("Unauthorized Component", function () {
  it("renders without crashing", function () {
    render(<Unauthorized />);
  });
  test("matches snapshot", function () {
    const { container } = render(<Unauthorized />);
    expect(container).toMatchSnapshot();
  });
  it("It displays the unauthorized image on the page", function () {
    const { container } = render(<Unauthorized />);
    expect(container.querySelector(".Unauthorized-photo")).toBeInTheDocument();
  });
  it("Displays an unauthorized message", function () {
    const { container } = render(<Unauthorized />);
    expect(container.querySelector(".Unauthorized-message").innerHTML).toEqual(
      "Please login to access this page!"
    );
  });
});
