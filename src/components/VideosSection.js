
import useFetchVideo from "../utils/useFetchVideos";
import VideoCard from "./videoCard";
import { Link } from "react-router";
import { useSelector } from "react-redux";
const VideosSection = ({info}) => {
 const videos = useFetchVideo();
 const searchTerm = useSelector((store) => store.search.searchTerm);
 console.log("this is" + searchTerm)
 console.log(videos)

 const searchedVideos = searchTerm ? videos.filter((vid) => vid.snippet.title.toLowerCase().includes(searchTerm.toLowerCase())) : videos;

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-7 mt-15">
    
     {videos.length === 0 ? (
      <p>Loading...</p>
    ) : searchedVideos.length === 0 ? (
      <p className="col-span-3 text-center text-gray-500 text-lg ">No videos found</p>
    ) : (
        searchedVideos.map((vid) => <Link key={vid.id} to={"/watch?v="+vid.id} >
          <VideoCard key={vid.id} info={vid} /> </Link>  )

      )}
     
    </div>
  )
}

export default VideosSection;
