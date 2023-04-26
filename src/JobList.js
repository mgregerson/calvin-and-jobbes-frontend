import { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";

/** JobList
 *
 * Props: None
 * State: jobs: [{job1} ...] isLoading: boolean
 *
 *
 *  RoutesList -> JobList
 */

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /** Fetches jobs on mount. Sets jobs to all jobs from API response.  */

  useEffect(function fetchJobsOnMount() {
    async function getJobs() {
      const jobs = await JoblyApi.getJobs();
      setJobs(jobs);
      setIsLoading(false);
    }
    if (isLoading === true) {
      getJobs();
    }
  }, []);

  if (isLoading === true) {
    return <div className="Loading">Loading Companies....</div>;
  }

  /** Filters jobs by title. Sets state of jobs to API response */

  async function filterJobs(title) {
    const jobs = await JoblyApi.searchJobsByTitle(title);
    setJobs(jobs);
  }

  return (
    <div className="JobList col-md-8 mx-auto">
      <SearchForm handleSearch={filterJobs} />
      <div className="JobList-List">
        {isLoading === false ? <JobCardList jobs={jobs} /> : null}
      </div>
    </div>
  );
}

export default JobList;
