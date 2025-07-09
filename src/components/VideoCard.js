
const VideoCard = ({info}) => {
  if (!info) return null;
  const {snippet, statistics} = info;
  const { title, channelTitle, thumbnails } = snippet;
  const {viewCount} = statistics;
  
  return (
    <div>
      <img className="rounded-2xl w-full mb-2"
      src={thumbnails?.high?.url} alt="video thumbnail" />
      <div className="flex items-start gap-4">
      <img className="rounded-full w-8 h-8"
      src={thumbnails?.default?.url} alt="video thumbnail" />
      <ul className="space-y-1">
        <li className="font-semibold text-sm">{title}</li>
        <>
        <li className="text-sm text-[#606060] mb-1">{channelTitle}</li>
        <li className="text-xs text-[#606060]">{(viewCount/100000).toFixed(1)} M views</li>
        </>
      </ul>
      </div>
    </div>
  )
}

export default VideoCard;
