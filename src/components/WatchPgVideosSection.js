const WatchPageVideoSection = ({info}) => {
  if (!info) return null;
  const {snippet, statistics} = info;
  return (
      <div className=" w-95 h-28 flex space-x-2 hover:cursor-pointer">
        <img alt="Video thumbnail" className="rounded-xl h-30" src={snippet.thumbnails.high.url}/>
        <div className="flex flex-col justify-around">
          <h1  className="text-xs font-semibold text-black ">{snippet.title}</h1>
          <div>
          <h2 className="text-[#606060] text-xs">{snippet.channelTitle}</h2>
          <span className="text-[#606060] text-xs">{((statistics.viewCount)/10000).toFixed(1)}K views </span>
          </div>
        </div>
     </div>
  )
}

export default WatchPageVideoSection