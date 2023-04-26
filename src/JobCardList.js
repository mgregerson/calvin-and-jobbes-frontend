import React, { useState } from "react";
import JobCard from "./JobCard";
import "./JobCardList.css";

// const TEST_JOBS = [
//     {
//       "id": 7,
//       "title": "Technical brewer",
//       "salary": 157000,
//       "equity": "0"
//     },
//     {
//       "id": 18,
//       "title": "Embryologist, clinical",
//       "salary": 138000,
//       "equity": "0"
//     },
//     {
//       "id": 62,
//       "title": "Art gallery manager",
//       "salary": null,
//       "equity": "0.085"
//     },
//     {
//       "id": 95,
//       "title": "Writer",
//       "salary": 172000,
//       "equity": "0.091"
//     },
//     {
//       "id": 119,
//       "title": "Oceanographer",
//       "salary": null,
//       "equity": "0.097"
//     },
//     {
//       "id": 127,
//       "title": "Glass blower/designer",
//       "salary": 126000,
//       "equity": "0.099"
//     }
//   ]

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
