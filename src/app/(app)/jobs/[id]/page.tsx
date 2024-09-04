"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import jobData from "@/cardData.json";


function IdPage() {
  const router = useRouter()
  const params = useParams();
  const { id } = params;
  const handleOnClick = ()=>{
    router.push('/jobs')
  }

  // fetch the job data from an API using the id parameter
  try {
    const job = jobData.find((job) => job.key.toString() === id);
    if (!job) {
      return <div>Job not found</div>;
    }
    // render the job data on the page
    return (
      <div
        className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 mb-6
    "
      >
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-800">{job.job_title}</h1>
          <p className="text-gray-600">
            {job.company_name} | {job.location} | {job.job_type}
          </p>
          <p className="text-gray-500 text-sm mt-1">{job.time_stamp}</p>
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Job Description
          </h2>
          <p className="text-gray-600">{job.job_description}</p>
        </div>

        {/* Company Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Company Information
          </h2>
          <p className="text-gray-600">
            Company description and additional details here. 
          </p>
        </div>

        {/* Apply Section */}
        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleOnClick}>
            Apply Now
          </button>
        </div>

        {/* Related Jobs Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Related Jobs
          </h2>
          {/* Add related job listings here */}
          <ul className="list-disc ml-5 text-gray-600">
            <li>Frontend Developer at InnovateX</li>
            <li>Backend Developer at Digital Wave</li>
            <li>UI/UX Designer at Beta Technologies</li>
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    return;
  }
}

export default IdPage;
