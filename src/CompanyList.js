import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";
import JoblyApi from "./api";
import "./CompanyList.css"

/** CompanyList
 *
 *  Props: None
 *
 *  State:
 *       - companies: [{
 *                      "handle": "anderson-arias-morrow",
 *                      "name": "Anderson, Arias and Morrow",
 *                      "description": "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
 *                      "numEmployees": 245,
 *                      "logoUrl": "/logos/logo3.png"
 *                     } ...]
 *       - isLoading: Boolean
 *
 *
 * RoutesList -> CompanyList -> SearchForm + CompanyCard
 */

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(companies, "THE COMPANIES STATE");

  /** Returns list of all companies in the database on mount. */

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

  /** Filters companies by handle, Sets companies state to response from API. */

  async function filterCompanies(term) {
    const companies = await JoblyApi.searchCompaniesByHandle(term);
    setCompanies(companies);
    console.log("SEARCH CALLED");
  }

  return (
    <div className="CompanyList col-md-8 mx-auto">
      <SearchForm handleSearch={filterCompanies} />
      <div className="CompanyList-List">
        {isLoading !== true
          ? companies.map((company) => (
              <CompanyCard key={company.handle} company={company} />
            ))
          : null}
      </div>
    </div>
  );
}

export default CompanyList;
