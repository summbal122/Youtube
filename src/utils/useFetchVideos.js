  import { YOUTUBE_VIDEOS } from "../Constants";
  import { useState, useEffect } from "react";
   
  const useFetchVideo = () => { 
  const [videos, setVideos] = useState([]);
   useEffect(() => {
    getVideos();
   }, [])
  
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS);
    const json = await data.json();
    setVideos(json.items);
  }
  return videos;

}
export default useFetchVideo;