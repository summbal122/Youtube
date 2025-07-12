import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import {addMessage} from "../utils/chatSlice";
import { generate, makeRandomMessage } from "../utils/nameGenerator";


const LiveChat = () => {
  const chatMessages = useSelector((store) => store.chat.chatMessages)
  const dispatch = useDispatch();
  const [liveMessage , setLiveMessage] = useState("");
  useEffect(() => {
  const timer =  setInterval(()=> {
    dispatch(addMessage({ 
      name: generate(),
      message: makeRandomMessage(15)
    }))
    }, 2000);
    return() => {clearInterval(timer) }
  }, [])

  return (

    <div className="hidden md:block w-full overflow-y-scroll border border-gray-300 rounded-xl ">
      <div className="text-center p-2 2xl:p-4 text-sm md:text-lg 2xl:text-2xl text-gray-600  border-b border-b-gray-300"><span>Live Chat</span></div>
      <div className="h-65 xl:h-80 2xl:h-120 overflow-y-scroll flex flex-col-reverse space-y-1 xl:space-y-2">
      {chatMessages.map((m, i) => (
       <ChatMessage key={i}  name={m.name} message={m.message}/>
      ))}
      </div>
      <form 
     onSubmit={(e) => {
     e.preventDefault();
     dispatch(addMessage({ name: "Sumbal", message: liveMessage }));
    setLiveMessage("");
    }} className="space-x-2 flex justify-between px-2 py-3">
        
        <input
        value={liveMessage}
         onChange={(e) => { setLiveMessage(e.target.value)}}
         className="border p-2 2xl:p-4 rounded-sm text-sm w-full border-gray-300 focus:outline-black" type="text"></input>
        <button className="text-white bg-black px-3 py-2.5 2xl:px-5 text-xs md:text-sm 2xl:text-xl rounded-sm hover:cursor-pointer">Send</button>
      </form>
    </div>
  )
}

export default LiveChat
