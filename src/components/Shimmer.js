const Shimmer = ({ count }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-7 w-full mt-4">
      {Array(count).fill(0).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="rounded-2xl w-full h-65 bg-gray-200 mb-4"></div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <div className="flex-1 space-y-2">
              <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
              <div className="w-1/2 h-3 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Shimmer;