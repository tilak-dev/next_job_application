"use client";
import { Bookmark, Building2, MapPin, MoveRight } from "lucide-react";
import React from "react";
interface JobCardData {
  company_name: string;
  job_title: string;
  job_type: string;
  experience_level: string;
  job_description: string;
  time_stamp: string;
  location: string;
}

function JobCard({
  company_name,
  job_title,
  job_type,
  job_description,
  location,
  experience_level,
  time_stamp,
}: JobCardData) {
  return (
    <div className="p-3 ">
      <div className=" bg-transparent/10 hover:shadow-xl  hover:shadow-slate-900/30 duration-300 ease-in-out shadow-lg p-5 flex flex-col gap-1 md:gap-2.5 rounded-xl border-[1px] border-transparent hover:border-green-800 transition-all">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-xs md:text-[16px] text-ellipsis flex gap-1 items-center">
            <Building2 size={16} strokeWidth={1.25} absoluteStrokeWidth />
            {company_name}
          </p>

          <div className=" flex gap-1 md:text-sm text-xs text-gray-300 hover:text-white items-center  transition-all duration-500 ease-in-out">
            <span>Save</span> <Bookmark size={"16px"} />
          </div>
        </div>
        <div className="flex justify-start flex-col">
          <h2 className="lg:text-2xl text-base font-bold ">{job_title}</h2>
          <span className=" mt-1 p-0.5 text-[10px] rounded-lg bg-blue-600 max-w-max hover:bg-transparent transition-all duration-500 ease-in-out ">
            {job_type}
          </span>
        </div>
        <div className="text-xs md:md:text-sm text-gray-200 flex items-center ">
          <MapPin size={13} strokeWidth={1} absoluteStrokeWidth />&nbsp;  {location}
        </div>
        <div className="text-xs md:text-sm">
          <div className="font-normal m-1 text-gray-200">
           Experience level : { experience_level}
          </div>
          <div className="">
            <p className="text-clip text-[10px] md:text-sm text-gray-400">
              <span className=" font-semibold text-[16px]">Job Description :</span>
              {job_description}{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center h-9">
          <span className="text-xs md:text-sm font-semibold ">{time_stamp}</span>

          <button className="bg-green-500 text-sm gap-2 py-1.5 px-2 rounded-3xl flex items-center hover:bg-green-600 hover:text-[16px]  transition-all duration-500 ease-in-out">
            Apply Now{" "}
            <MoveRight size={16} strokeWidth={2} absoluteStrokeWidth />
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
