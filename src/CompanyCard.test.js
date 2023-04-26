import { render, screen } from '@testing-library/react';
import CompanyCard from './CompanyCard';

const TEST_COMPANY_LOGO = {

  handle: "APP",
  name: "Apple",
  description: "Company with computers",
  numEmployees: 400,
  logoUrl: "logos/logo1.png",
  jobs: [{
    "id": 91,
    "title": "Paramedic",
    "salary": 122000,
    "equity": "0.047"
  }]

};

const TEST_COMPANY_NO_LOGO = {

  handle: "APP",
  name: "Apple",
  description: "Company with computers",
  numEmployees: 400,
  logoUrl: null,
  jobs: [{
    "id": 91,
    "title": "Paramedic",
    "salary": 122000,
    "equity": "0.047"
  }]

};

test('renders without crashing', () => {
  render(<CompanyCard company={TEST_COMPANY_LOGO} />);
});

test('matches snapshot', () => {
  const { companyCard } = render(<CompanyCard company={TEST_COMPANY_LOGO} />);
  expect(companyCard).toMatchSnapshot();
});

// test('puts info on page', () => {
//   const { companyCard } = render(<CompanyCard company={TEST_COMPANY_LOGO} />);

//   expect(screen.getByText("Apple")).toBeInTheDocument();
//   expect(screen.getByText("Company with computers")).toBeInTheDocument();
//   expect(screen.getAllByAltText("Apple")).toBeInTheDocument();
// });


// Renders if company has no logo