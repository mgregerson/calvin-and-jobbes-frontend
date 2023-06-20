import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import "./JobCard.css";
import { useState, useEffect } from "react";

function ApplicationsList({ user }) {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // we are going to need to do a useEffect that fetches all jobs that this user has applied to
  useEffect(function fetchJobApplications() {
    async function getJobs() {
      const companies = await JoblyApi.getAppliedJobs(user.username);
      setJobs(companies);
      setIsLoading(false);
    }
    if (isLoading === true) {
      getJobs();
    }
  }, []);

  if (isLoading === true) {
    return <div className="Loading">Loading Jobs You've Applied To....</div>;
  }

  return (
    <div className="ApplicationsList col-md-8 mx-auto pt-5">
      <h1>Your Applications</h1>
      <JobCardList jobs={jobs} />
    </div>
  );
}

export default ApplicationsList;
