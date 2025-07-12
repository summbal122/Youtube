const WatchPageVideo = ({info}) => {
  if (!info) return null;
  const {snippet, statistics} = info;
  return (
      <div className="flex gap-2 2xl:gap-4 hover:cursor-pointer">
        <img alt="Video thumbnail" className="rounded-md md:rounded-xl md:h-30 h-20 2xl:h-50 " src={snippet.thumbnails.high.url}/>
        <div className="flex flex-1 flex-col justify-around text-[10px] md:text-xs  2xl:text-xl">
          <h1  className="font-semibold text-black ">{snippet.title}</h1>
          <div className="text-[#606060]">
          <h2>{snippet.channelTitle}</h2>
          <span>{((statistics.viewCount)/10000).toFixed(1)}K views </span>
          </div>
        </div>
     </div>
  )
}

export default WatchPageVideo;