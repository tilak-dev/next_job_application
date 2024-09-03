
import React from "react";
interface CardData {
  title: string;
  description: string;
  icon: JSX.Element;
}


function Card({title,description,icon}:CardData) {//+

  return (
    <div className="flex justify-center items-center p-2">
      <div className="p-5 md:px-7 text-white text-center bg-slate-900/40 rounded-lg mt-2 md:mt-5">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="">
        {icon}
        </div>
        <h2 className="text-lg md:text-xl font-semibold text-purple-400">{title}</h2>
        <p className="text-center text-sm md:text-[17px] text-gray-500">
          {description}
        </p>
      </div>
    </div>
    </div>
    
  );
}

export default Card;

