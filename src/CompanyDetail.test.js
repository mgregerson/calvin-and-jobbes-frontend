import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";

const TEST_COMPANY_LOGO = {
  handle: "APP",
  name: "Apple",
  description: "Company with computers",
  numEmployees: 400,
  logoUrl: "logos/logo1.png",
  jobs: [
    {
      id: 91,
      title: "Paramedic",
      salary: 122000,
      equity: "0.047",
    },
  ],
};

const TEST_COMPANY_NO_LOGO = {
  handle: "APP",
  name: "Apple",
  description: "Company with computers",
  numEmployees: 400,
  logoUrl: null,
  jobs: [
    {
      id: 91,
      title: "Paramedic",
      salary: 122000,
      equity: "0.047",
    },
  ],
};

test("renders without crashing", function () {
  render(<CompanyCard company={TEST_COMPANY_LOGO} />);
});

test("matches snapshot", function () {
  const { container } = render(<CompanyCard company={TEST_COMPANY_LOGO} />);
  expect(container).toMatchSnapshot();
});

test("puts info on page if there is a logo", () => {
  const { container } = render(<CompanyCard company={TEST_COMPANY_LOGO} />);

  expect(container.querySelector(".CompanyCard-company").innerHTML).toEqual(
    "Apple"
  );
  expect(container.querySelector(".CompanyCard-description").innerHTML).toEqual(
    "Company with computers"
  );
  expect(container.querySelector(".CompanyCard-img")).toBeInTheDocument();
});

// Renders if company has no logo

test("puts info on the page if there is no logo", function () {
  const { container } = render(<CompanyCard company={TEST_COMPANY_NO_LOGO} />);

  expect(container.querySelector(".CompanyCard-company").innerHTML).toEqual(
    "Apple"
  );
  expect(container.querySelector(".CompanyCard-description").innerHTML).toEqual(
    "Company with computers"
  );
  expect(container.querySelector(".CompanyCard-img")).not.toBeInTheDocument();
});
