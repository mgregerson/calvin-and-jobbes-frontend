import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";
import JoblyApi from "./api";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(companies, "THE COMPANIES STATE");

  useEffect(function fetchCompaniesOnMount() {
    async function getCompanies() {
      const companies = await JoblyApi.getCompanies();
      setCompanies(companies);
      setIsLoading(false);
    }
    if (isLoading === true) {
      getCompanies();
    }
  }, []);

  if (isLoading === true) {
    return <div className="Loading">Loading Companies....</div>;
  }

  return (
    <div className="CompanyList col-md-8 offset-md-2">
      <div className="CompanyList-List">
        {isLoading !== true ? (
          companies.map((company) => <CompanyCard company={company} />)
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

// static async getCompanies() {
//   let res = await this.request('companies');
//   return res.companies;
// }

// async function fetchDeck() {
//   const deckResult = await axios.get(`${BASE_URL}/new/`);
//   setDeck(deckResult.data);
// }

export default CompanyList;
