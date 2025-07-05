import SideBar from "./SideBar";
import MainSection from "./MainSection";

const Body = () => {
  return (
    <div className="flex w-full mt-4">
      <div className="w-42">
        <SideBar />
      </div> 
      <div className="flex-1 overflow-hidden">
        <MainSection />
      </div>
    </div>
  );
};

export default Body;
