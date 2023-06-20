import React, { useState } from "react";
import JobCard from "./JobCard";

/** JobCardList
 *
 * Props:
 *      - jobs: [{
 *                   "id": 91,
 *                   "title": "Paramedic",
 *                   "salary": 122000,
 *                   "equity": "0.047",
 *                   "companyName": "Watson Davies",
 *                   "companyHandle": "watson-davies"
 *               } ...]
 *
 * JobList -> JobCardList -> JobCard
 *
 * OR
 *
 * CompanyDetail -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {
  return (
    <div className="JobCardList">
      {jobs.map((j) => (
        <JobCard
          key={j.id}
          title={j.title}
          salary={j.salary}
          equity={j.equity}
          companyName={j.companyName}
          id={j.id}
        />
      ))}
    </div>
  );
}

export default JobCardList;
