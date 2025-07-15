import { LOGO, YOUTUBE_SEARCH_API } from "../Constants"
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults, setSearchTerm } from "../utils/searchSlice";
import { useLocation } from "react-router";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const location = useLocation();
  const isWatchPage = location.pathname === "/watch";
  const toogleMenuHandle = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }));
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    dispatch(setSearchTerm(searchQuery));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="sticky top-0 bg-white z-30">
      {/* MOBILE HEADER */}
      <div className="md:hidden px-4 py-2 space-y-2">
        {/* Row: Hamburger + Logo + Create */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <i onClick={toogleMenuHandle} className="fa-solid fa-bars text-xl hover:cursor-pointer"></i>
            <img className="w-20 hover:cursor-pointer" alt="Youtube logo" src={LOGO} />
          </div>
          <div className="flex gap-2 items-center"> 
          <button className="flex items-center text-sm gap-1 bg-gray-100 px-3 py-0.5 rounded-full">
            <span className="text-xl">+</span> Create
          </button>
          <i className="fa-regular fa-user text-sm rounded-full border px-2.5 py-2  hover:cursor-pointer"></i>
          </div>
        </div>
   
        {/*  Suggestions */}
            {!isWatchPage && (  
        <div className="relative">
          <div className="flex w-full">
            <input
              className="w-full border border-gray-300 px-4 py-2 rounded-l-full text-sm focus:outline-none"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              onKeyDown={handleKeyDown}   />
            <button onClick={handleSearch} className="bg-gray-100 border border-gray-300 px-4 rounded-r-full">
              <i className="fa-solid fa-magnifying-glass text-gray-600 text-lg"></i>
            </button>
          </div>

          {showSuggestions && (
            <div className="absolute top-full bg-white shadow-lg rounded-lg w-full">
              <ul className="p-2 flex flex-col">
                {suggestions.map((s) => (
                  <div
                    key={s}
                    onMouseDown={() => {
                      setSearchQuery(s);
                      dispatch(setSearchTerm(s));
                      setShowSuggestions(false);
                    }}
                    className="flex gap-2 p-2 items-center hover:bg-gray-100 cursor-pointer" >
                    <i className="fa-solid fa-magnifying-glass text-gray-400 text-sm"></i>
                    <li className="text-sm">{s}</li>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div> )}
      </div>

      {/* DESKTOP HEADER */}
      <div className="hidden md:grid grid-cols-12 px-6 py-1 2xl:px-15 2xl:py-8">
        <div className="md:col-span-3 flex items-center gap-4 2xl:gap-8">
          <i onClick={toogleMenuHandle} className="fa-solid fa-bars lg:text-xl 2xl:text-3xl hover:cursor-pointer"></i>
          <img className="w-20 lg:w-28 2xl:w-44 hover:cursor-pointer" alt="Youtube logo" src={LOGO} />
        </div>

        <div className="md:col-span-6 w-full flex items-center justify-center relative">
        <div className="w-full flex">
            <div className="flex w-full relative">
              <input
                className="w-full border border-gray-300 px-4 py-2 2xl:py-4 rounded-l-full focus:outline-none text-xs lg:text-lg 2xl:text-3xl 2xl:px-8"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
                onKeyDown={handleKeyDown} />
              <button onClick={handleSearch} className="md:bg-gray-100 md:border md:border-gray-300 md:px-6 rounded-r-full hover:bg-gray-200">
                <i className="fa-solid fa-magnifying-glass text-gray-600 text-xl md:text-md lg:text-xl 2xl:text-3xl"></i>
              </button>
            </div>

            {showSuggestions && (
              <div className="absolute top-full bg-white shadow-lg rounded-lg w-64 lg:w-xl 2xl:w-5xl">
                <ul className="p-2 flex flex-col">
                  {suggestions.map((s) => (
                    <div
                      key={s}
                      onMouseDown={() => {
                        setSearchQuery(s);
                        dispatch(setSearchTerm(s));
                        setShowSuggestions(false);
                      }}
                      className="flex gap-2 p-2 items-center hover:bg-gray-100 cursor-pointer" >
                      <i className="fa-solid fa-magnifying-glass text-gray-400 text-xs lg:text-sm 2xl:text-lg"></i>
                      <li className="text-xs lg:text-sm">{s}</li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
         


          {/* Mic button */}
          <button className="hidden md:block ml-3 bg-gray-100 px-2 py-1 lg:px-3 lg:py-2 2xl:py-5 2xl:px-6 rounded-full hover:bg-gray-200">
            <i className="fa-solid fa-microphone lg:text-lg text-gray-700 2xl:text-3xl"></i>
          </button>
          </div>
        </div>

        <div className="md:col-span-3 flex items-center gap-3 lg:gap-6 2xl:gap-20 justify-end text-xs lg:text-lg 2xl:text-3xl">
          <button className="flex items-center justify-center text-md gap-2 bg-gray-100 px-3 py-0.5 lg:px-4 lg:py-1 2xl:px-8 2xl:py-4 rounded-full hover:cursor-pointer">
            <span className="text-2xl 2xl:text-4xl text-black font-thin">+</span> Create
          </button>
          <button>
            <i className="fa-solid fa-bell text-sm lg:text-xl 2xl:text-3xl hover:cursor-pointer"></i>
          </button>
          <i className="fa-regular fa-user lg:text-md border rounded-full px-3 py-2.5 hover:cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
