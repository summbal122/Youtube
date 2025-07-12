const WatchPageShimmer = () => {
  return (
    <div className="grid lg:grid-cols-12 gap-4 2xl:gap-12 px-2 xl:px-4 2xl:px-8 py-2 md:py-4 animate-pulse">
      <div className="space-y-4 lg:col-span-8">
        {/* Video iframe shimmer */}
        <div className="w-full h-56 md:h-96 2xl:h-220 bg-gray-300 rounded-xl"></div>
        <div className="space-y-2">
          <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
          <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
          <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
          <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
        </div>

      </div>
      <div className="lg:col-span-4 flex flex-col gap-4">
        {/* Live Chat */}
        <div className="hidden md:block border border-gray-300 rounded-xl overflow-hidden">
          <div className="h-10 bg-gray-200 w-full text-center"></div>
          <div className="h-64 2xl:h-96 bg-gray-100 p-2 space-y-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-2">
                <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
          <div className="flex px-2 py-3 gap-2">
            <div className="h-10 w-full bg-gray-200 rounded"></div>
            <div className="h-10 w-20 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPageShimmer;
