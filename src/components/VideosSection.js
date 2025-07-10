
import useFetchVideo from "../utils/useFetchVideos";
import VideoCard from "./videoCard";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
const VideosSection = () => {
 const videos = useFetchVideo();
 const searchTerm = useSelector((store) => store.search.searchTerm);
 const searchedVideos = searchTerm ? videos.filter((vid) => vid.snippet.title.toLowerCase().includes(searchTerm.toLowerCase())) : videos;

  return (
    <div className="2xl:mt-8">
     {videos.length === 0 ? (
       <Shimmer count= {50}/>
    ) : searchedVideos.length === 0 ? (
      <p className="col-span-3 text-center text-gray-500 text-lg 2xl:text-3xl mt-20 2xl:mt-40 ">No videos found</p>
    ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 2xl:gap-x-8 gap-y-7 2xl:gap-y-12 mt-4"> 
       { searchedVideos.map((vid) => <Link key={vid.id} to={"/watch?v="+vid.id} >
          <VideoCard key={vid.id} info={vid} /> </Link>  )}
       </div>
      )}
     
    </div>
  )
}

export default VideosSection;
