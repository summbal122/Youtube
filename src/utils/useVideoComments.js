import { YOUTUBE_COMMENTS } from "../Constants";
import { useEffect, useState } from "react";

const useVideoComments = (videoId) => {
  const [comments, setComments] = useState([]);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const fetchData = async () => {
  const res = await fetch(YOUTUBE_COMMENTS(videoId, API_KEY));
   const json = await res.json();
   setComments(json.items)
   
  }
   useEffect(() => {
    fetchData();
   }, [videoId])
  return comments;

}
export default useVideoComments;