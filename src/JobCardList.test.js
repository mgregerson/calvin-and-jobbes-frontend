import JobCardList from "./JobCardList";
import { render } from "@testing-library/react";

const TEST_JOBS_LIST = [
  {
    id: 1,
    title: "Test Job 1",
    salary: 50,
    equity: ".1",
    companyHandle: "test-company-1",
    companyName: "Test Company 1",
  },
  {
    id: 2,
    title: "Test Job 2",
    salary: null,
    equity: null,
    companyHandle: "test-company-2",
    companyName: "Test Company 2",
  },
];

describe("JobCardList component", function () {
  test("renders without crashing", function () {
    render(<JobCardList jobs={TEST_JOBS_LIST} />);
  });

  test("matches snapshot", function () {
    const { container } = render(<JobCardList jobs={TEST_JOBS_LIST} />);
    expect(container).toMatchSnapshot();
  });

  test("It creates a new Job component for each job in our prop Jobs List", function () {
    const { container } = render(<JobCardList jobs={TEST_JOBS_LIST} />);
    expect(container.querySelectorAll(".card").length).toEqual(2);
  });
});
