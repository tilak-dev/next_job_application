
import React from "react";
interface CardData {
  title: string;
  description: string;
  icon: JSX.Element;
}


function Card({title,description,icon}:CardData) {//+

  return (
    <div className=" text-white w-60 p-5 bg-slate-900/40 rounded-lg mt-5">
      <div className="flex flex-col justify-center items-center">
        <div className="">
        {icon}
        </div>
        <h2 className="text-lg font-semibold text-purple-400">{title}</h2>
        <p className="text-center text-sm text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;

