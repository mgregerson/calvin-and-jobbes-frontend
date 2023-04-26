import "./JobCard.css";

/** JobCard
 *
 * Props:
 *      - jobData: {
 *		              "id": 1,
 *		              "title": "Conservator, furniture",
 *		              "salary": 110000,
 *		              "equity": "0",
 *		              "company": {
 *			                        "handle": "watson-davis",
 *			                        "name": "Watson-Davis",
 *			                        "description": "Year join loss.",
 *			                        "numEmployees": 819,
 *			                        "logoUrl": "/logos/logo3.png"
 *		                         }
 *                  }
 *
 * Renders individual Job Card
 *
 * JobCardList -> JobCard
 */

function JobCard({ jobData }) {
  return (
    <div className="JobCard card">
      <div className="card-body">
        <h6 className="card-title">{jobData.title}</h6>
        <p></p>
        <div>
          <small>Salary: {jobData.salary}</small>
        </div>
        <div>
          <small>Equity: {jobData.equity}</small>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
