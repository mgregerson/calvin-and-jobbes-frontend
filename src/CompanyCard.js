import "./CompanyCard.css";

/** CompanyCard
 *
 * Props:
 *      - company: {
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
 *
 * CompanyList -> CompanyCard
 *
 */

function CompanyCard({ company }) {
  return (
    <div className="CompanyCard card">
      <div className="CompanyCard card-body">
        <div className="CompanyCard card-title">
          <h6 className="CompanyCard-company">{company.name}</h6>
          {company.logoUrl !== null && (
            <img
              className="float-end ms-5"
              src={`${company.logoUrl}`}
              alt={company.name}
            />
          )}
        </div>

        <small className="CompanyCard-description float-start">
          {company.description}
        </small>
      </div>
    </div>
  );
}

export default CompanyCard;
