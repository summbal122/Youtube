
const VideoCard = ({info}) => {
  if (!info) return null;
  const {snippet, statistics} = info;
  const { title, channelTitle, thumbnails } = snippet;
  const {viewCount} = statistics;
  
  return (
    <div>
      <img className="rounded-2xl w-full mb-2 2xl:mb-4"
      src={thumbnails?.high?.url} alt="video thumbnail" />
      <div className="flex items-start gap-2 md:gap-4">
      <img className="rounded-full w-8 h-8 2xl:w-11 2xl:h-11"
      src={thumbnails?.default?.url} alt="video thumbnail" />
      <ul className="space-y-1">
        <li className="font-semibold text-xs lg:text-sm 2xl:text-2xl">{title}</li>
        <>
        <li className="text-[10px] md:text-xs lg:text-sm 2xl:text-xl text-[#606060] mb-0.5 md:mb-1">{channelTitle}</li>
        <li className=" text-[10px] md:text-xs 2xl:text-lg text-[#606060]">{(viewCount/100000).toFixed(1)} M views</li>
        </>
      </ul>
      </div>
    </div>
  )
}

export default VideoCard;
