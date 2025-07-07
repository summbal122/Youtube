
import useFetchVideo from "../utils/useFetchVideos";
import VideoCard from "./videoCard";
import { Link } from "react-router";

const VideosSection = () => {
 const videos = useFetchVideo();

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-7 mt-15">
      {
      videos.length > 0 ? (
        videos.map((vid) => <Link key={vid.id} to={"/watch?v="+vid.id}  >
          <VideoCard key={vid.id} info={vid} /> </Link>  )

      ) : (
        <p>Loading...</p>
      )}
     
    </div>
  )
}

export default VideosSection;
