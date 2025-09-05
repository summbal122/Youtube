
const ChatMessage = ({name, message}) => {
  return (
    <div className="flex gap-2 md:gap-4 items-center hover:bg-gray-200/40 px-2 py-0.5 xl:py-1 2xl:px-6 2xl:py-2  hover:cursor-pointer">
      <img
      className="h-6 md:h-7 2xl:h-9 rounded-full"
      alt="user"
      src="https://yt4.ggpht.com/ytc/AIdro_kRjevQHFWu_QOwH7-XQao-TIrcJGIqI1SEw1cR-k4=s32-c-k-c0x00ffffff-no-rj" />
      <>
      <h1 className="font-semibold text-gray-600/80 text-xs md:text-sm 2xl:text-xl">{name}</h1>
      <p className="text-[10px] md:text-xs 2xl:text-lg">{message}</p>
      </>
    </div>
  )
}

export default ChatMessage;
