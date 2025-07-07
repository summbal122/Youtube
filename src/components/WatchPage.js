import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import useVideoDetails from "../utils/useVideoDetails";
import useVideoComments from "../utils/useVideoComments";

import useFetchVideo from "../utils/useFetchVideos";
import VideoCard from "./videoCard";
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
  
   

  return (
    <div className="flex px-6 border-4">
    <div className="w-[70%] py-4 pr-6">
      <iframe width="900" height="500" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
      <h1 className="font-bold text-lg">{snippet.title}</h1>
      <h2 className="font-medium text-sm">{snippet.channelTitle}</h2>
      <h3 className="text-xs">{statistics.likeCount} views</h3>
      <p className="text-sm">{snippet.description}</p>
      <i className="fa-regular fa-thumbs-up"></i>
      <i className="fa-regular fa-thumbs-down"></i>
      <i className="fa-solid fa-arrow-down"></i>
      <img className="w-5" src="https://cdn-icons-png.flaticon.com/512/6469/6469436.png"/>
      
      <div className="mt-8 flex flex-col gap-5">
  
        <h2 className="text-lg font-semibold">Comments</h2>
         <h3 className="font-medium">{statistics.commentCount}</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="mt-2 flex gap-3">
            <img className="rounded-full" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
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
          <div className="w-[30%] gap-y-7 mt-15 overflow-y-auto">
   
    </div>
      
    </div>
  )
}

export default WatchPage;
