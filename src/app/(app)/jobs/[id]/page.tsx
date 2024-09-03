import React from 'react'

const job = {
  job_title : "Job Title",
  company_name : "Company Name",
  location : "Location",
  job_type : "Job Type",
  time_stamp : "Timestamp",
  job_description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper, ipsum in malesuada cursus, erat velit fermentum velit, vel semper est mauris eu neque. Donec vel libero vel justo finibus viverra ac vel nunc. Nullam sit amet velit et velit ultricies vulputate"
}

function IdPage() {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 mb-6
    '>
       <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800">{job.job_title}</h1>
        <p className="text-gray-600">{job.company_name} | {job.location} | {job.job_type}</p>
        <p className="text-gray-500 text-sm mt-1">{job.time_stamp}</p>
      </div>

      {/* Job Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Job Description</h2>
        <p className="text-gray-600">{job.job_description}</p>
      </div>

      {/* Company Information */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Company Information</h2>
        <p className="text-gray-600">Company description and additional details here.</p>
      </div>

      {/* Apply Section */}
      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Apply Now
        </button>
      </div>

      {/* Related Jobs Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Related Jobs</h2>
        {/* Add related job listings here */}
        <ul className="list-disc ml-5 text-gray-600">
          <li>Frontend Developer at InnovateX</li>
          <li>Backend Developer at Digital Wave</li>
          <li>UI/UX Designer at Beta Technologies</li>
        </ul>
      </div>
    </div>
  )
}

export default IdPage