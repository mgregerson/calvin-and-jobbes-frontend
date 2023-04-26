import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import JobCardList from "./JobCardList";
import JoblyApi from "./api"

function CompanyDetail() {

  const [company, setCompany] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const { handle } = useParams();

  console.log("COMPANY STATE IS: ", company)

  useEffect(function fetchCompanyOnMount() {
    async function getCompany() {
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
      setIsLoading(false);
    }
    if (isLoading === true) {
      getCompany();
    }
  }, []);

  if (isLoading === true) {
    return <div className="Loading">Loading Company....</div>;
  }

  return (
    <div className="CompanyDetail col-md-8 offset-md-2">
      <h4>{ company.name }</h4>
      <p>{ company.description }</p>
      <JobCardList jobs={company.jobs}/>
    </div>
  )
}

{/* <JobCardList jobs={}/> */}

export default CompanyDetail;
