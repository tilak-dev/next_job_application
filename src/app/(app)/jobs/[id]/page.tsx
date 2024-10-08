"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import jobData from "@/cardData.json";

function IdPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const handleOnClick = () => {
    router.push("/jobs");
  };

  // fetch the job data from an API using the id parameter
  try {
    const job = jobData.find((job) => job.key.toString() === id);
    if (!job) {
      return <div>Job not found</div>;
    }
    // render the job data on the page
    return (
      <div className=" flex justify-center items-center py-5">
        <div
          className="px-8 py-6 bg-violet-100/80 rounded-xl shadow-lg md:w-2/3 w-4/5
    "
        >
          <h1 className="text-black font-serif font-extrabold text-center md:text-xl md:mb-2 ">Job Details page</h1>
          <div className="mb-4">
            <h1 className="md:text-3xl text-xl font-bold text-gray-900">
              {job.job_title}
            </h1>
            <p className="text-gray-700">
              {job.company_name} | {job.location} | {job.job_type}
            </p>
            <p className="text-gray-500 text-sm mt-1">{job.time_stamp}</p>
          </div>

          {/* Job Description */}
          <div className="mb-6">
            <h2 className="md:text-xl text-lg font-semibold text-gray-800 md:mb-1">
              Job Description
            </h2>
            <p className="break-all  text-gray-600 md:text-[15px] text-sm">{job.job_description}</p>
          </div>

          {/* Company Information */}
          <div className="mb-6">
            <h2 className="md:text-xl text-lg  font-semibold text-gray-800 md:mb-1">
              Company Information
            </h2>
            <p className="text-gray-600 md:text-[15px] text-sm  break-all ">
              Company description and additional details here.
            </p>
          </div>

          {/* Apply Section */}
          <div className="text-center mt-8">
            <button
              className=" hover:bg-[#5046e6] border-[#5046e6] border-[2px] transition-all ease-in-out duration-300 px-4 py-2 text-sm text-black hover:text-white rounded-3xl hover:rounded-3xl"
              onClick={handleOnClick}
            >
              Apply Now
            </button>
          </div>

          {/* Related Jobs Section */}
          <div className="mt-10">
            <h2 className="md:text-xl text-lg font-semibold text-gray-700 mb-4">
              Related Jobs
            </h2>
            {/* Add related job listings here */}
            <ul className="list-disc ml-5 text-gray-600 md:text-[15px] text-sm">
              <li>Frontend Developer at InnovateX</li>
              <li>Backend Developer at Digital Wave</li>
              <li>UI/UX Designer at Beta Technologies</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return;
  }
}

export default IdPage;
