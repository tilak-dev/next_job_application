import React from "react";

function Navbar() {
  return (
    <div
      className="h-20 w-screen flex flex-row
     justify-between items-center px-8"
    >
      <div className="">1</div>
      <div className="">2</div>
      <div className="">
        <div className="drawer ">
          <input id="my-drawer" type="checkbox" className=" drawer-toggle" />
          <div className="drawer-content ">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-primary ">
              X
            </label>
          </div>
          <div className=" drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
