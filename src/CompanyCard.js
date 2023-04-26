import "./CompanyCard.css";

function CompanyCard({ company }) {
  return (
    <div className="CompanyCard card">
      <div className="Company Card card-body">
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
