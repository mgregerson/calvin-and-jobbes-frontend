function JobCard({ jobData }) {

  // Title
  // Salary
  // Equity

  return (
    <div className="JobCard card">
      <div className="card-body">
        <h6>{jobData.title}</h6>
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