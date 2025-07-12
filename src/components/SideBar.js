import { Link } from "react-router";
import { SHORTS_LOGO, SUBS_LOGO, PLAYLIST_LOGO, WATCH_LATER_LOGO, YOUR_VIDEOS_LOGO, GAMING_LOGO, NEWS_LOGO, SPORTS_LOGO } from "../Constants"
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../utils/searchSlice";

const SideBar = () => {

  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  const IMG = new URL("../../images/sports.png", import.meta.url).href;
  const IMG_TRENDING = new URL("../../images/trending.png", import.meta.url).href;
  
  const handleHomeClick = ()=> {
    dispatch(setSearchTerm(false));
  };
  if (!isMenuOpen) return null;
  return (
    <div className="flex flex-col items-center gap-4 fixed bg-white z-50 md:sticky top-14 md:top-20 bottom-0 overflow-x-scroll h-screen  px-3 lg:px-2 2xl:px-6 py-2 lg:py-0">
      <ul className="space-y-2 lg:space-y-3 2xl:space-y-6 flex flex-col text-xs lg:text-sm xl:text-md 2xl:text-2xl ">
       <Link to="/">
      <li onClick={()=> {
        handleHomeClick();
        }} className="flex gap-4 ml-2 lg:ml-3 items-center hover:cursor-pointer">
       
        <i className="fa-solid fa-house text-lg "></i> 
        Home 
        </li>
        </Link>
       <li className="flex items-center gap-2 hover:cursor-pointer" ><img className="w-9 inline" alt="" src={SHORTS_LOGO}/>
        Shorts</li>
       <li className="flex items-center hover:cursor-pointer">
        <img className="w-11 inline -ml-1 " alt="" src={SUBS_LOGO}/> 
        Subscriptions</li>
      </ul>

      <hr className="text-gray-200 w-full"></hr>
     <div className="space-y-2 2xl:space-y-5 text-xs lg:text-sm xl:text-md 2xl:text-2xl ">
      <h1 className="text-sm 2xl:text-2xl">You</h1>
       <ul className="space-y-2 lg:space-y-3 2xl:space-y-6 flex flex-col">
        <li className="flex gap-4 items-center hover:cursor-pointer">
        <i className="fa-solid fa-clock-rotate-left text-lg">
        </i>History </li>
       <li className="flex gap-3 items-cente hover:cursor-pointer">
        <img className="w-6 inline" alt="" src={PLAYLIST_LOGO}/>
         Playlists</li>
       <li className="flex gap-3 items-center hover:cursor-pointer" >
        <img className="w-6 inline" alt="" src={YOUR_VIDEOS_LOGO}/>
         Your videos</li>
       <li className="flex gap-3 items-center hover:cursor-pointer">
        <img className="w-6 inline" alt="" src={WATCH_LATER_LOGO}/>
         Watch later</li>
       <li className="flex gap-3 items-center hover:cursor-pointer">
        <i className="fa-regular fa-thumbs-up text-xl"></i>
        Liked videos</li>
      </ul>
       </div>
     <hr className="text-gray-200 w-full"></hr>

     <div className=" space-y-2 2xl:space-y-5 -ml-6 text-xs lg:text-sm xl:text-md 2xl:text-2xl ">
      <h2 className="text-sm 2xl:text-2xl">Explore</h2>
       <ul className="space-y-2 lg:space-y-3 2xl:space-y-6 flex flex-col hover:cursor-pointer " >
        <li><img className="w-12 -ml-3 inline hover:cursor-pointer " alt="" src={IMG_TRENDING}/>Trending</li>
        <li className="flex gap-6 items-center hover:cursor-pointer"><i className="fa-solid fa-music text-lg"></i>Music</li>
       <li className="flex gap-3 items-center hover:cursor-pointer"><img className="w-7 inline " alt="" src={GAMING_LOGO}/>Gaming</li>
       <li className="flex gap-3 items-center hover:cursor-pointer"><img className="w-7 inline " alt="" src={NEWS_LOGO}/>News</li>
       <li className="flex"><img className="w-14 -ml-4 inline hover:cursor-pointer" alt="" src={IMG}/>Sports</li>

       <li className="flex"><img className="w-14 -ml-4 inline" alt="" src={IMG}/>Sports</li>
       <li className="flex"><img className="w-14 -ml-4 inline" alt="" src={IMG}/>Sports</li>
       <li className="flex"><img className="w-14 -ml-4 inline" alt="" src={IMG}/>Sports</li>
       <li className="flex"><img className="w-14 -ml-4 inline" alt="" src={IMG}/>Sports</li>
       <li className="flex"><img className="w-14 -ml-4 inline" alt="" src={IMG}/>Sports</li>
       <li className="flex"><img className="w-14 -ml-4 inline" alt="" src={IMG}/>Sports</li>
       <li className="flex"><img className="w-14 -ml-4 inline" alt="" src={IMG}/>Sports</li>
       <li className="flex"><img className="w-14 -ml-4 inline" alt="" src={IMG}/>Sports</li>
       <li className="flex"><img className="w-14 -ml-4 inline" alt="" src={IMG}/>Sports</li>
      </ul> 
      </div>
    </div>
  )
}

export default SideBar
