import "./JobCard.css";
import { useState } from "react";
import JoblyApi from "./api";
import { useContext } from "react";
import userContext from "./userContext.js";
import { useEffect } from "react";

/** JobCard
 *
 * Props:
 *      - title
 *      - companyName
 *      - salary
 *      - equity
 *      - id
 *
 * Renders individual Job Card
 *
 * JobCardList -> JobCard
 */

function JobCard({ title, companyName, salary, equity, id }) {
  const [hasApplied, setHasApplied] = useState(false);
  const [apiError, setApiError] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(userContext);

  useEffect(
    function fetchApplicationStatus() {
      async function getApplicationStatus() {
        try {
          const applications = await JoblyApi.getApplicationsByUsername(
            user.username
          );
          if (applications.includes(id)) {
            setHasApplied(true);
          }
        } catch (err) {
          setIsLoading(false);
          console.log(err);
          setApiError({
            isError: true,
            errorMessage: err[0],
          });
        }
      }
      if (isLoading === true) {
        getApplicationStatus();
      }
    },
    [hasApplied]
  );

  async function applyToJob() {
    const jobApplication = await JoblyApi.applyToJob(user.username, id);
    setHasApplied(true);
  }

  return (
    <div className="JobCard-container">
      <div className="JobCard card my-2">
        <div className="JobCard-body">
          <h6 className="JobCard-title">{title}</h6>
          <p className="JobCard-company-name">{companyName}</p>
          {salary !== null ? (
            <div>
              <small className="JobCard-salary">Salary: {salary}</small>
            </div>
          ) : (
            <div>
              <small className="JobCard-salary">Unpaid Internship</small>
            </div>
          )}
          {equity !== null && (
            <div>
              <small className="JobCard-equity">Equity: {equity}</small>
            </div>
          )}
          {!hasApplied ? (
            <button
              type="button"
              className="JobCard-apply btn search-btn btn-sm btn-success"
              style={{ marginRight: "5px", marginBottom: "5px" }}
              onClick={applyToJob}
            >
              Apply Now
            </button>
          ) : (
            <button
              type="button"
              className="JobCard-apply btn search-btn btn-sm btn-danger"
              style={{ marginRight: "5px", marginBottom: "5px" }}
              onClick={applyToJob}
            >
              Unapply
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobCard;
