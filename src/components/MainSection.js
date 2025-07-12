import OptionsSection from "./OptionsSection";
import VideosSection from "./VideosSection";

const MainSection = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] px-2 md:px-4 2xl:px-8"> {/* total height minus header */}
      <OptionsSection />
      <div className="flex-1 overflow-y-auto"> 
        <VideosSection />
      </div>
    </div>
  );
};

export default MainSection;
