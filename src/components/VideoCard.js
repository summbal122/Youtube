
const VideoCard = ({info}) => {
  if (!info) return null;
  const {snippet, statistics} = info;
  const {channelTitle, title, thumbnails} = snippet;
  
  return (
    <div className=''>
      <img className="rounded-2xl h-68 w-full mb-2"
      src={thumbnails?.high?.url} alt="video thumbnail" />
      <ul className="space-y-2">
        <li className="font-semibold text-lg">{title}</li>
        <>
        <li className="text-sm text-[#606060] mb-1">{channelTitle}</li>
        <li className="text-xs text-[#606060]">{(statistics?.viewCount/1000000).toFixed(1)} K views</li>
        </>
      </ul>
      
    </div>
  )
}

export default VideoCard;
