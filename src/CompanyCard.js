import "./CompanyCard.css";

function CompanyCard({ company }) {
  return (
    <div className="CompanyCard card">
      <div className="card-body">
        <h6 class="card-title">
          {company.name}
          {company.logoUrl !== null && (
            <img
              className="float-end ms-5"
              src={`${company.logoUrl}`}
              alt={company.name}
            />
          )}
        </h6>
        <p>
          <small>{company.description}</small>
        </p>
      </div>
    </div>
  );
}

export default CompanyCard;
