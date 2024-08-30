"use client";
import { Bookmark, Building2, MapPin, MoveRight } from "lucide-react";
import React from "react";

function JobCard() {
  return (
    <div className="p-3 mb-6">
      <div className=" bg-black shadow-lg p-6 flex flex-col gap-3 rounded-xl">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg text-ellipsis flex gap-1 items-center"><Building2 size={16} strokeWidth={1.25} absoluteStrokeWidth />
      Company</p>

        <div className=" flex gap-1 text-sm text-gray-300 hover:text-white items-center  transition-all duration-500 ease-in-out">
          <span>Save</span> <Bookmark size={"16px"}/>
        </div>
        
      </div>
      <div className="flex justify-start flex-col">
        <h2 className="lg:text-4xl font-bold ">Entry Backend Engineer</h2>
        <span className=" mt-1 p-1 text-xs rounded-lg bg-blue-600 max-w-max hover:bg-transparent transition-all duration-500 ease-in-out ">Full-time</span>
      </div>
      <div className="text-sm text-gray-200 flex items-center "><MapPin size={16} strokeWidth={1.5} absoluteStrokeWidth /> India, New Delhi</div>
      <div className="text-sm ">
        <div className="font-normal m-1 text-gray-200">Experience Level: Executive</div>
        <div className="">
          <p className="text-clip text-xs text-gray-400">
            <span className=" font-semibold text-sm">Job Description :</span>
            Lorem ipsum dolor sit ame Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, odio?          </p>
        </div>
      </div>
      
      <div className="flex justify-between items-center h-9">
      <span className="text-sm font-semibold ">15 hours ago</span>

        <button className="bg-green-500 text-sm gap-2 py-1.5 px-2 rounded-3xl flex items-center hover:bg-green-600 hover:text-[16px]  transition-all duration-500 ease-in-out">
          Apply Now <MoveRight size={16} strokeWidth={2} absoluteStrokeWidth />
        </button>
  
    </div>
    </div>
    </div>
  );
}

export default JobCard;
