import SideBar from "./SideBar";

import { Outlet } from "react-router";

const Body = () => {
  return (
    <div className="flex w-full mt-2 md:mt-4">
      <div>
        <SideBar />
      </div> 
      <div className="flex-1 overflow-hidden">
       <Outlet />
      </div>
    </div>
  );
};

export default Body;
