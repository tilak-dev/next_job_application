import { Logs, MapPin, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Navbar() {
  const [jobName, setJobName] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const router = useRouter();


  //change route
  const handleOnHome = () => {
    router.push("/");
  };

  //submit form
  const handleOnFindjob = (e:React.FormEvent) => {
    e.preventDefault();
    const encodedJobName = encodeURIComponent(jobName);
    const encodedLocation = encodeURIComponent(jobLocation);

    router.push(`/jobs/search?job=${encodedJobName}&location=${encodedLocation}`);
  };
  
  return (
    <div
      className="h-20 w-screen flex flex-row
     justify-between items-center px-8 backdrop-blur-sm bg-transparent/10 shadow-lg "
    >
      <div
        className="font-mono font-extrabold text-2xl tracking-widest cursor-pointer"
        onClick={handleOnHome}
      >
        JOBIFY
      </div>

      <form onSubmit={(e)=>handleOnFindjob(e)}>
        <div className=" items-center bg-transparent  justify-between gap-2 border-white rounded-lg border-b-2 p-2 hidden md:flex ">
          <div className="flex">
            <div className="flex items-center">
              <Search size={16} strokeWidth={1.5} />
              <input
                onChange={(e) => setJobName(e.target.value)}
                type="search"
                placeholder="Search Jobs..."
                className="p-2  placeholder:text-gray-300 placeholder:font-light placeholder:text-sm bg-transparent rounded-md focus:outline-none focus:border-blue-400  focus:border-b-[3px] border-b-[3px]  border-transparent  rounded-r-none after:"
              />
            </div>
            <div className="flex items-center">
              <MapPin size={16} strokeWidth={1.5} />
              <input
                type="search"
                onChange={(e) => setJobLocation(e.target.value)}
                placeholder="Location"
                className="p-2  placeholder:text-gray-300 placeholder:font-light placeholder:text-sm bg-transparent  rounded-md focus:outline-none focus:border-blue-400  focus:border-b-[3px] border-b-[3px]  border-transparent  rounded-l-none "
              />
            </div>
          </div>

          <button
            className="bg-blue-600 p-2 text-sm rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
            type="submit"
          >
            Find jobs
          </button>
        </div>
      </form>
      <div className="">
        <div className="drawer ">
          <input id="my-drawer" type="checkbox" className=" drawer-toggle" />
          <div className="drawer-content ">
            <label htmlFor="my-drawer" className="btn rounded-3xl btn-ghost ">
              <Logs size={28} />
            </label>
          </div>
          <div className=" drawer-side ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li className="flex justify-center items-center ">
                work is on progress...
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
