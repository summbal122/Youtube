import {LOGO, YOUTUBE_SEARCH_API} from "../Constants"
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch();
  const toogleMenuHandle = () => {
    dispatch(toggleMenu());
  }
  
  useEffect(() => {
    const timer = setTimeout(()=> {
    if(searchCache[searchQuery]) {//cache is an object, return value without Api call if it is present in the cache
      setSuggestions(searchCache[searchQuery]);
    }else {
      getSearchSuggestions();
    }
  }, 200)
  return () => {
    clearTimeout(timer);
  }
  }, [searchQuery])
  
  const getSearchSuggestions = async() => {
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
     [searchQuery] : json[1]
    })) //pass an object, because we are storing cache as object, because of 0(1)
    
  }
  
  return (
    <div className="grid grid-cols-12 px-6 py-1 gap-6 sticky top-0 bg-white z-30 ">
      <div className="col-span-3 flex items-center gap-4 ">
      <i onClick={() => {
      toogleMenuHandle();
      }} className="fa-solid fa-bars text-xl hover:cursor-pointer"></i>
       <img className="w-28 hover:cursor-pointer" alt="Youtube logo" src={LOGO} />
      </div>
    <div className="col-span-6 flex items-center justify-center relative">
     <div className="flex w-full max-w-[600px] relative">
    <input
      className="w-full border border-gray-300 px-4 py-2 rounded-l-full focus:outline-none focus:ring-1 focus:ring-gray-400"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onFocus={() => {setShowSuggestions(true)}}
      onBlur={() => {setShowSuggestions(false)}}

    />
    <button className="bg-gray-100 border border-gray-300 px-6 rounded-r-full hover:bg-gray-200">
      <i className="fa-solid fa-magnifying-glass text-gray-600 text-xl"></i>
    </button>

    {/* Suggestions dropdown */}
    {showSuggestions && (
        <div className="absolute top-full w-132 bg-white shadow-lg rounded-lg ">
        <ul className="p-2 flex flex-col">
              {suggestions.map((s) => (
                <div key={s} className="flex gap-2 p-2 items-center hover:bg-gray-100 cursor-pointer">
          <i className="fa-solid fa-magnifying-glass text-gray-400 text-sm"></i>
          <li>{s}</li> 
          </div>
        ))}
        </ul>
      </div>
      )}

  
  </div>

  {/* Mic button */}
  <button className="ml-3 bg-gray-100 p-3 rounded-full hover:bg-gray-200">
    <i className="fa-solid fa-microphone text-lg text-gray-700"></i>
  </button>
</div>


      <div className="col-span-3 flex items-center  gap-6 justify-end ">
       <button className="flex items-center justify-center text-md gap-2 bg-gray-100 px-4 py-1 rounded-full hover:cursor-pointer">
        <span className="text-3xl text-black font-thin">+</span>
         Create
       </button>
        <button>
        <i className="fa-solid fa-bell text-xl hover:cursor-pointer"></i>
        </button>
        <i className="fa-regular fa-user text-md border rounded-full px-3 py-2.5 hover:cursor-pointer"></i>

      </div>
    </div>
  )
}

export default Header
