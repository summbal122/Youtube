
const CommentsSection = ({comments, videoData}) => {
 if (!comments || !Array.isArray(comments)) return null;
 const { snippet, statistics } = videoData;
  return (
    <div className="my-10 flex flex-col gap-5">
         <div className="flex items-center gap-2 text-xl font-bold">
           <h3 >{statistics.commentCount}</h3>
           <h2 >Comments</h2>
         </div>
          {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3 px-3">
            <img
            className="rounded-full w-10 h-10"
            src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
            onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png";
            }}
            alt="profile"
            />
            <div className="space-y-1"> 
            <p className="text-sm font-semibold ">
              {comment.snippet.topLevelComment.snippet.authorDisplayName}
            </p>
            <p className="text-sm">{comment.snippet.topLevelComment.snippet.textDisplay}</p>
            </div>
          </div>
        ))}
      </div>
  )
}

export default CommentsSection;
