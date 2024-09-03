"use client";
import React, { useState } from "react";

//interfaces
interface JobData {
  company_name: string;
  job_title: string;
  job_type: string;
  experience_level: string;
  job_description: string;
  time_stamp: string;
  location: string;
}

interface dataType {
  data: JobData[];
}

function Pagination({ data }: dataType) {
  const [currectPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  //calculate total number of pages
  const pageCount = Math.ceil(data.length / itemsPerPage);

  //get current page items
  const currentPage = data.slice(
    currectPage * itemsPerPage,
    (currectPage + 1) * itemsPerPage
  );
  //number into array
  const pageNumber = [];
  for (let i = 0; i < pageCount; i++) {
    pageNumber.push(i);
  }
  //defines a fution to handle page change events
  const handleOnPageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      <div className="join">
        {pageNumber.map((page) => (
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label={page.toString()}
            key={page}
            onClick={() => handleOnPageChange(-1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Pagination;
