import JobCard from "./JobCard";
import { render } from "@testing-library/react";

const TEST_JOB = {
  title: "Test Job",
  salary: 100000,
  equity: 0.1,
  companyName: "Test Company",
};

test("renders without crashing", function () {
  render(
    <JobCard
      title={TEST_JOB.title}
      salary={TEST_JOB.salary}
      equity={TEST_JOB.equity}
      companyName={TEST_JOB.companyName}
    />
  );
});

test("matches snapshot", function () {
  const { container } = render(
    <JobCard
      title={TEST_JOB.title}
      salary={TEST_JOB.salary}
      equity={TEST_JOB.equity}
      companyName={TEST_JOB.companyName}
    />
  );
  expect(container).toMatchSnapshot();
});

test("Displays all information on the job on the page if salary/equity NOT null", () => {
  const { container } = render(
    <JobCard
      title={TEST_JOB.title}
      salary={TEST_JOB.salary}
      equity={TEST_JOB.equity}
      companyName={TEST_JOB.companyName}
    />
  );

  expect(container.querySelector(".JobCard-title").innerHTML).toEqual(
    "Test Job"
  );
  expect(container.querySelector(".JobCard-company-name").innerHTML).toEqual(
    "Test Company"
  );
  expect(container.querySelector(".JobCard-salary").innerHTML).toEqual(
    "Salary: 100000"
  );
  expect(container.querySelector(".JobCard-equity").innerHTML).toEqual(
    "Equity: 0.1"
  );
});

test("Displays as unpaid internship if salary is null", () => {
  const { container } = render(
    <JobCard
      title={TEST_JOB.title}
      salary={null}
      equity={TEST_JOB.equity}
      companyName={TEST_JOB.companyName}
    />
  );

  expect(container.querySelector(".JobCard-title").innerHTML).toEqual(
    "Test Job"
  );
  expect(container.querySelector(".JobCard-company-name").innerHTML).toEqual(
    "Test Company"
  );
  expect(container.querySelector(".JobCard-salary").innerHTML).toEqual(
    "Unpaid Internship"
  );
  expect(container.querySelector(".JobCard-equity").innerHTML).toEqual(
    "Equity: 0.1"
  );
});

test("Does not display equity if null", () => {
  const { container } = render(
    <JobCard
      title={TEST_JOB.title}
      salary={TEST_JOB.salary}
      equity={null}
      companyName={TEST_JOB.companyName}
    />
  );

  expect(container.querySelector(".JobCard-title").innerHTML).toEqual(
    "Test Job"
  );
  expect(container.querySelector(".JobCard-company-name").innerHTML).toEqual(
    "Test Company"
  );
  expect(container.querySelector(".JobCard-salary").innerHTML).toEqual(
    "Salary: 100000"
  );
  expect(container.querySelector(".JobCard-equity")).not.toBeInTheDocument();
});
