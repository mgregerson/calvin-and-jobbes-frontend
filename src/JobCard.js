import "./JobCard.css";

/** JobCard
 *
 * Props:
 *      - title
 *      - companyName
 *      - salary
 *      - equity
 *
 * Renders individual Job Card
 *
 * JobCardList -> JobCard
 */

function JobCard({ title, companyName, salary, equity }) {
  return (
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
      </div>
    </div>
  );
}

export default JobCard;
