import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";

/** CompanyDetail
 *
 *  Props: None
 *
 *  State:
 *       - company: {
 *                  handle: ""
 *                  name: ""
 *                  description: ""
 *                  numEmployees: num
 *                  logoUrl: jpg
 *                  jobs: [{
 *                   "id": 91,
 *                   "title": "Paramedic",
 *                   "salary": 122000,
 *                   "equity": "0.047"
 *                   } ...]
 *                 }
 *       - isLoading: Boolean
 *       - apiError: Boolean
 *
 *  RoutesList -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  const { handle } = useParams();

  console.log("COMPANY STATE IS: ", company);

  useEffect(function fetchCompanyOnMount() {
    async function getCompany() {
      try {
        const company = await JoblyApi.getCompany(handle);
        setCompany(company);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setApiError(true);
      }
    }
    if (isLoading === true) {
      getCompany();
    }
  }, []);

  if (isLoading === true) {
    return <div className="Loading">Loading Company....</div>;
  }

  // Change this. Errors may arise for other reasons (ie. API is down.)
  if (apiError === true) {
    return <h1 className="apiError">There is no company with this handle.</h1>;
  }

  return (
    <div className="CompanyDetail col-md-8 offset-md-2">
      <h4>{company.name}</h4>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;
