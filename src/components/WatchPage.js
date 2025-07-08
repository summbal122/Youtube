import { useEffect} from "react"
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import useVideoDetails from "../utils/useVideoDetails";
import useVideoComments from "../utils/useVideoComments";
import useFetchVideo from "../utils/useFetchVideos";


const WatchPage = () => {
   const videos = useFetchVideo();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const videoId = searchParams.get("v");
  const comments = useVideoComments(videoId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [])
  const video = useVideoDetails(videoId);
  if (!video) return <div className="p-8">Loading...</div>; 
  const {snippet, statistics} = video;
   console.log(videos);
  return (
    <div className="flex justify-around px-2 py-4">
    <div className="pr-4 space-y-2">
      <iframe width="1000" height="500" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} 
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
      <div className="flex justify-between">  
        <div>
           <h1 className="font-bold text-xl mt-2">{snippet.title}</h1>
           <h2 className="text-sm font-bold">{snippet.channelTitle}</h2>
        </div>

       <div className="flex items-center gap-3">
            <div className="bg-gray-200 py-2 px-6 space-x-6 text-lg rounded-3xl">
              <i className="fa-regular fa-thumbs-up hover:cursor-pointer"></i>
              <span>|</span>
              <i className="fa-regular fa-thumbs-down hover:cursor-pointer"></i>
             </div>
             <div className="flex items-center gap-2 bg-gray-200 rounded-3xl px-4 py-2 hover:cursor-pointer">
              <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/6469/6469436.png"/>
              <span className="font-semibold text-sm">Share</span>
             </div>
              <i className="fa-solid fa-arrow-down hover:cursor-pointer"></i>
              <span className="bg-gray-200 px-3 py-2 rounded-full font-bold hover:cursor-pointer">...</span>
      </div>
      </div>
      <div>
      <h3 className="text-xs font-bold mb-1">{statistics.likeCount} views</h3>
      <p className="text-sm ">{snippet.description}</p>
      </div>

      {/* comments section */}
      <div className="my-10 flex flex-col gap-5">
         <div className="flex items-center gap-2 text-xl font-bold">
           <h3 >{statistics.commentCount}</h3>
           <h2 >Comments</h2>
         </div>
          {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3 px-3">
            <img
            className="rounded-full w-10 h-10"
            src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
            onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png";
            }}
            alt="profile"
            />
            <div className="space-y-1"> 
            <p className="text-sm font-semibold ">
              {comment.snippet.topLevelComment.snippet.authorDisplayName}
            </p>
            <p className="text-sm">{comment.snippet.topLevelComment.snippet.textDisplay}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      
      {/* videos section */}
         <div className="space-y-6 ">
          {videos.map((vid) => (
            <div key= {vid.id} className=" w-95 h-28 flex space-x-2 hover:cursor-pointer ">
              <img alt="Video thumbnail" className="rounded-xl h-30" src={vid.snippet.thumbnails.high.url}/>
              <div className="flex flex-col justify-around">
               <h1  className="text-xs font-semibold text-black ">{vid.snippet.title}</h1>
               <div>
                <h2 className="text-[#606060] text-xs">{vid.snippet.channelTitle}</h2>
                <span className="text-[#606060] text-xs">{((vid.statistics.viewCount)/10000).toFixed(1)}K views </span>
               </div>
             </div>
           </div>  )
         )}
     </div>
      
    </div>
  )
}

export default WatchPage;
