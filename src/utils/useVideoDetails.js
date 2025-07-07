import { useState, useEffect } from "react";

const useVideoDetails = (videoId) => {
  const [video, setVideo] = useState(null);
 const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  useEffect(() => {
    if (!videoId) return;

    const fetchVideoDetails = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
      );
      const data = await response.json();
      setVideo(data.items[0]); 
    };

    fetchVideoDetails();
  }, []);

  return video;
};

export default useVideoDetails;
