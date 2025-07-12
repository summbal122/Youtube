import { useEffect, useState} from "react"
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import useVideoDetails from "../utils/useVideoDetails";
import useVideoComments from "../utils/useVideoComments";
import useFetchVideo from "../utils/useFetchVideos";
import WatchPageVideo from "./WatchPgVideosSection";
import { Link } from "react-router";
import CommentsSection from "./CommentsSection";
import LiveChat from "./LiveChat";
import WatchPageShimmer from "./WatchPageShimmer";
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
  
  if (!video) return <div className="p-8"><WatchPageShimmer/></div>; 
  const {snippet, statistics} = video;

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
    <div className="grid lg:grid-cols-12 gap-3 2xl:gap-12 justify-around px-2 xl:px-4 2xl:px-8 py-2 md:py-4">
     
     {/* Main Video Section  */}
    <div className="space-y-2 2xl:space-y-5 lg:col-span-8 ">
      <iframe className="w-full md:w-full rounded-xl h-100 lg:h-120 2xl:h-220" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} 
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
      <div className="grid md:grid-cols-2 gap-3"> 
        {/* Title Section */}
        <div className=" md:justify-self-start">
           <h1 className="font-bold text- md:text-lg xl:text-xl 2xl:text-4xl my-1 lg:my-2 2xl:my-4">{snippet.title}</h1>
           <h2 className="text-xs xl:text-sm 2xl:text-2xl font-bold">{snippet.channelTitle}</h2>
        </div>
        
        {/* Options Section */}
       <div className="flex items-center gap-2 md:gap-4 md:justify-self-end">
            <div className="bg-gray-200 py-1 xl:py-2  px-2 xl:px-6 2xl:px-7 2xl:py-3 space-x-2 2xl:space-x-4 xl:space-x-3 md:text-lg  2xl:text-xl rounded-3xl">
              <div className="inline space-x-2 xl:space-x-2 2xl:space-x-4 ">
              <i onClick={() => {
                handleLikeCount();
              }}
               className={`fa-regular fa-thumbs-up 2xl:text-2xl hover:cursor-pointer active:text-sm ${liked ? "text-blue-800" : "text-black"}`}></i>
              <span className="text-xs xl:text-sm  2xl:text-xl ">{count}</span>
              </div>
              <span>|</span>
              <i onClick={() => {
                 handleUnlikeCount();
               } } className="fa-regular fa-thumbs-down  2xl:text-2xl hover:cursor-pointer active:text-sm"></i>
             </div>
             <div className="flex items-center gap-2 bg-gray-200 rounded-3xl px-4 2xl:px-7 2xl:py-3 py-2 hover:cursor-pointer">
              <img className="w-4 xl:w-6" src="https://cdn-icons-png.flaticon.com/512/6469/6469436.png"/>
              <span className="font-semibold text-xs xl:text-sm  2xl:text-xl">Share</span>
             </div>
              <i className="fa-solid fa-arrow-down hover:cursor-pointer  2xl:text-2xl"></i>
              <span className="bg-gray-200 px-2 xl:px-3 py-1 xl:py-2 rounded-full font-bold hover:cursor-pointer  2xl:text-2xl">...</span>
      </div>
      </div>
      {/* Description Section */}
      <div className="mt-6">
      <h3 className="font-bold mb-1 text-xs md:text-sm  2xl:text-2xl 2xl:mb-2">{statistics.viewCount} views</h3>
      <p className="text-xs md:text-sm  2xl:text-2xl" >{snippet.description}</p>
      </div>
      
      {/* comments section */}
     {comments && (
     <CommentsSection comments={comments} videoData={video} />
     )}
     

      </div>
      
      {/* videos section */}
         <div className="flex flex-col gap-4 lg:col-span-4 w-full ">
          <LiveChat/>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
          {videos.map((vid) => (
            <Link key={vid.id} to={"/watch?v="+vid.id} >
          <WatchPageVideo key= {vid.id} info={vid} />
          </Link> )
         )} 
         </div>
     </div>
      
    </div>
  )
}

export default WatchPage;
