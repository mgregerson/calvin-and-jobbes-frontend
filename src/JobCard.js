import "./JobCard.css";
import { useHistory } from "react-router-dom";
import ApplicationForm from "./ApplicationForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import JoblyApi from "./api";

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
  async function applyToJob() {
    setHasApplied(!hasApplied);
  }

  // async function getJobId() {
  //   const company = await
  // }

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
