"use client";
import React, { useState } from "react";

interface DATA {
  data: [];
}

function Pagination({ data }: DATA) {
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
