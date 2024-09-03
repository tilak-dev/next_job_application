"use client";
import JobCard from "@/components/JobCard";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import jobData from "@/cardData.json";
import axios from "axios";

interface JobData {
  data: [
    {
      company_name: string;
      job_title: string;
      job_type: string;
      experience_level: string;
      job_description: string;
      time_stamp: string;
      location: string;
    }
  ];
}

export default function page() {
  return (
    <div className="text-white px-3">
      <div className="flex justify-between py-8 px-5 items-center">
        <h1 className="lg:text-4xl text-xl font-bold ">
          Discover Your Next Remote Opportunity
        </h1>
        <div className="text-xs md:text-sm text-gray-400">203 jobs found</div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3  ">
        {jobData.map((job) => (
          <JobCard
            key={job.key}
            time_stamp={job.time_stamp}
            company_name={job.company_name}
            job_description={job.job_description}
            experience_level={job.experience_level}
            job_title={job.job_title}
            job_type={job.job_type}
            location={job.location}
          />
        ))}
      </div>
      <div className="">
        <Pagination data={jobData} />
      </div>
    </div>
  );
}
