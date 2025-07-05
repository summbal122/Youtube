import {LOGO} from "../Constants"
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Header = () => {

  const dispatch = useDispatch();
  const toogleMenuHandle = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-cols-12 px-6 py-1 gap-6 ">
      <div className="col-span-3 flex items-center gap-4 ">
      <i 
      onClick={() => {
      toogleMenuHandle();
      }} className="fa-solid fa-bars text-xl hover:cursor-pointer"></i>
       <img className="w-28 hover:cursor-pointer" alt="Youtube logo" src={LOGO} />
      </div>

      <div className="col-span-6 flex gap-2  p-3">
       <div className="flex w-full">
        <input className="w-full border border-light-gray  px-5 rounded-l-full"
         placeholder="Search" ></input>
        <button>
          <i className="fa-solid fa-magnifying-glass bg-gray-100 border border-light-gray text-gray-600 px-6 py-3 text-xl rounded-r-full 
          hover:cursor-pointer">
          </i>
          </button>
       </div>
       <button>
        <i className="fa-solid fa-microphone bg-gray-100 py-3 px-4 text-lg rounded-full hover:cursor-pointer"></i>
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
