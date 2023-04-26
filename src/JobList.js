import { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";

/** JobList
 *
 *
 *
 *  RoutesList -> JobList
 */

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(jobs, "THE jobs STATE");
  console.log(isLoading, "isloading state!!!");

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

  async function filterJobs(title) {
    const jobs = await JoblyApi.searchJobsByTitle(title);
    setJobs(jobs);
    console.log("Search called, JOBS!!!! :)");
  }

  return (
    <div className="JobList col-md-8 offset-md-2">
      <SearchForm handleSearch={filterJobs} />
      <div className="JobList-List">
        {isLoading !== true ? <JobCardList jobs={jobs} /> : null}
      </div>
    </div>
  );
}

export default JobList;
