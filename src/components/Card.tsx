import { Search } from "lucide-react";
import React from "react";
interface CardData {
  title: string;
  description: string;
}


function Card({title,description}:CardData) {//+

  return (
    <div className=" text-white w-60 p-5 bg-slate-900/40 rounded-lg mt-5">
      <div className="flex flex-col justify-center items-center">
        <div className="">
        <Search size={40} strokeWidth={2} color="purple"/>
        </div>
        <h2 className="text-lg font-semibold text-purple-400">Smart Search!</h2>
        <p className="text-center text-sm text-gray-500">
          Find the perfect remote job match with our advanced algorithms.
        </p>
      </div>
    </div>
  );
}

export default Card;

