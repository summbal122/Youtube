
const ChatMessage = ({name, message}) => {
  return (
    <div className="flex gap-4 items-center hover:bg-gray-200/40 px-2 py-1  hover:cursor-pointer">
      <img
      className="h-7 rounded-full"
      alt="user"
      src="https://yt4.ggpht.com/ytc/AIdro_kRjevQHFWu_QOwH7-XQao-TIrcJGIqI1SEw1cR-k4=s32-c-k-c0x00ffffff-no-rj"
      />
      <>
      <h1 className="font-semibold text-gray-600/80 text-sm">{name}</h1>
      <p className=" text-xs">{message}</p>
      </>
    </div>
  )
}

export default ChatMessage;
