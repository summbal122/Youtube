import { useEffect, useState} from "react"
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import useVideoDetails from "../utils/useVideoDetails";
import useVideoComments from "../utils/useVideoComments";
import useFetchVideo from "../utils/useFetchVideos";
import WatchPageVideoSection from "./WatchPgVideosSection";
import { Link } from "react-router";
import CommentsSection from "./CommentsSection";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const videos = useFetchVideo();
  const [searchParams, setSearchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const comments = useVideoComments(videoId);
  const video = useVideoDetails(videoId);
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
  if (video?.statistics?.likeCount) {
    setCount(Number(video.statistics.likeCount)); 
  }
}, [video]);

  useEffect(() => {
    dispatch(closeMenu());
  }, [])
  
  if (!video) return <div className="p-8">Loading...</div>; 
  const {snippet, statistics} = video;
  console.log(video);
  
  
  const handleLikeCount = () => {
    if(!liked)
    setCount(prev => prev + 1); 
    setLiked(true)
};

  const handleUnlikeCount =() => {
    setLiked(false)
    setCount(prev => prev - 1 )
  }

  return (
    <div className="flex justify-around px-2 py-4">
    <div className="pr-4 space-y-2">
      <iframe width="1000" height="500" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} 
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
      <div className="grid grid-cols-5 gap-3 place-items-center justify-items-stretch">  
        <div className=" col-span-3">
           <h1 className="font-bold text-xl my-2">{snippet.title}</h1>
           <h2 className="text-sm font-bold">{snippet.channelTitle}</h2>
        </div>

       <div className="flex items-center gap-3 col-span-2">
            <div className="bg-gray-200 py-2 px-6 space-x-3 text-lg rounded-3xl">
              <div className="inline space-x-2">
              <i onClick={() => {
                handleLikeCount();
              }}
               className={`fa-regular fa-thumbs-up hover:cursor-pointer active:text-sm ${liked ? "text-blue-800" : "text-black"}`}></i>
              <span className="text-sm">{count}</span>
              </div>
              <span>|</span>
              <i onClick={() => {
                 handleUnlikeCount();
               } } className="fa-regular fa-thumbs-down hover:cursor-pointer active:text-sm"></i>
             </div>
             <div className="flex items-center gap-2 bg-gray-200 rounded-3xl px-4 py-2 hover:cursor-pointer">
              <img className="w-6" src="https://cdn-icons-png.flaticon.com/512/6469/6469436.png"/>
              <span className="font-semibold text-sm">Share</span>
             </div>
              <i className="fa-solid fa-arrow-down hover:cursor-pointer"></i>
              <span className="bg-gray-200 px-3 py-2 rounded-full font-bold hover:cursor-pointer">...</span>
      </div>
      </div>
      {/* Description */}
      <div className="mt-4 text-sm">
      <h3 className="font-bold mb-1">{statistics.viewCount} views</h3>
      <p>{snippet.description}</p>
      </div>
      
      {/* comments section */}
     {comments && (
     <CommentsSection comments={comments} videoData={video} />
     )}
     

      </div>
      
      {/* videos section */}
         <div className="flex flex-col gap-5 ">
          <LiveChat/>
          {videos.map((vid) => (
            <Link key={vid.id} to={"/watch?v="+vid.id} >
          <WatchPageVideoSection key= {vid.id} info={vid} />
          </Link> )
         )}
     </div>
      
    </div>
  )
}

export default WatchPage;
