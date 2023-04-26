import React, { useState } from "react";
import JobCard from "./JobCard";
import "./JobCardList.css";

/** JobCardList
 *
 * Props:
 *      - jobs: [{
 *                   "id": 91,
 *                   "title": "Paramedic",
 *                   "salary": 122000,
 *                   "equity": "0.047"
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
        <JobCard key={j.id} jobData={j} />
      ))}
    </div>
  );
}

export default JobCardList;
