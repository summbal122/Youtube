import SideBar from "./SideBar";

import { Outlet } from "react-router";

const Body = () => {
  return (
    <div className="flex w-full mt-4 ">
      <div className="w-42">
        <SideBar />
      </div> 
      <div className="flex-1 overflow-hidden">
       <Outlet />
      </div>
    </div>
  );
};

export default Body;
