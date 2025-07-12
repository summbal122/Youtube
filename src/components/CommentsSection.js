
const CommentsSection = ({comments, videoData}) => {
 if (!comments || !Array.isArray(comments)) return null;
 const { statistics } = videoData;
  return (
    <div className="mt-6 lg:mt-8 w-full flex flex-col gap-5">
         <div className="flex items-center gap-2 lg:text-lg 2xl:text-2xl font-bold">
           <h3 >{statistics.commentCount}</h3>
           <h2 >Comments</h2>
         </div>
          {comments.map((comment) => (
          <div key={comment.id} className="flex gap-1.5 md:gap-3 md:px-3">
            <img
            className="rounded-full w-7 h-7 md:w-10 md:h-10 "
            src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
            onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png";
            }}
            alt="profile"
            />
            <div className="space-y-1 text-xs md:text-sm 2xl:text-2xl"> 
            <p className="font-semibold ">
              {comment.snippet.topLevelComment.snippet.authorDisplayName}
            </p>
            <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default CommentsSection;
