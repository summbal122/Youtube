const WatchPageVideo = ({info}) => {
  if (!info) return null;
  const {snippet, statistics} = info;
  return (
      <div className="flex flex-col lg:flex-row gap-2 2xl:gap-4 hover:cursor-pointer">
        <img alt="Video thumbnail" className="rounded-md md:rounded-xl lg:h-30  2xl:h-50 " src={snippet.thumbnails.high.url}/>
        <div className="flex md:flex-1 gap-2 text-xs 2xl:text-xl">
          <img className="block lg:hidden w-6 h-6 rounded-full"
           alt="Channel Profile" src={snippet.thumbnails.default.url}/>
           <div>
          <h1  className="font-semibold text-black mb-1 ">{snippet.title}</h1>
          <div className="text-[#606060] text-[10px]">
          <h2>{snippet.channelTitle}</h2>
          <span>{((statistics.viewCount)/10000).toFixed(1)}K views </span>
          </div>
          </div>
        </div>
     </div>
  )
}

export default WatchPageVideo;