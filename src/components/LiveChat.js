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
    console.log("api pooling")
    dispatch(addMessage({ 
      name: generate(),
      message: makeRandomMessage(15)
    }))
    }, 2000);
    return() => {clearInterval(timer) }
  }, [])

  return (

    <div className="w-full overflow-y-scroll border border-gray-300 rounded-xl  ">
      <div className="h-80 overflow-y-scroll flex flex-col-reverse space-y-3  ">
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
         className="border p-2 rounded-sm text-sm w-full border-gray-300 focus:outline-black" type="text"></input>
        <button className="text-white bg-black px-3 py-2.5 text-sm rounded-sm hover:cursor-pointer">Send</button>
      </form>
    </div>
  )
}

export default LiveChat
