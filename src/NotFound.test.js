import NotFound from "./NotFound";
import { render } from "@testing-library/react";

describe("NotFound Component", function () {
  it("renders without crashing", function () {
    render(<NotFound />);
  });
  test("matches snapshot", function () {
    const { container } = render(<NotFound />);
    expect(container).toMatchSnapshot();
  });
  it("It displays the 404 image on the page", function () {
    const { container } = render(<NotFound />);
    expect(container.querySelector(".NotFound-photo")).toBeInTheDocument();
  });
  it("Displays a Not Found message", function () {
    const { container } = render(<NotFound />);
    expect(container.querySelector(".NotFound-message").innerHTML).toEqual(
      "Sorry, we couldn't find that page!"
    );
  });
});
