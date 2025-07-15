import { useState } from "react";
import useIsLargeScreen from "../utils/useIsLargeScreen"; // adjust path as needed

const CommentsSection = ({ comments, videoData }) => {
  const isLargeScreen = useIsLargeScreen();
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_COUNT = 4;

  if (!comments || !Array.isArray(comments)) return null;

  const { statistics } = videoData;

  // Logic: Always show all comments on large screens
  const visibleComments =
    isLargeScreen || showAll
      ? comments
      : comments.slice(0, VISIBLE_COUNT);

  return (
    <div className="mt-6 lg:mt-8 w-full flex flex-col gap-5 px-3 lg:px-0">
      <div className="flex items-center gap-2 lg:text-lg 2xl:text-2xl font-bold">
        <h3>{statistics.commentCount}</h3>
        <h2>Comments</h2>
      </div>

      {visibleComments.map((comment) => (
        <div key={comment.id} className="flex gap-1.5 md:gap-3 md:px-3">
          <img
            className="rounded-full w-7 h-7 md:w-10 md:h-10"
            src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png";
            }}
            alt="profile"
          />
          <div className="space-y-1 text-xs md:text-sm 2xl:text-2xl">
            <p className="font-semibold">
              {comment.snippet.topLevelComment.snippet.authorDisplayName}
            </p>
            <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
          </div>
        </div>
      ))}

      {!isLargeScreen && comments.length > VISIBLE_COUNT && (
        <button
          className="text-gray-500 text-sm lg:text-lg 2xl:text-2xl 2xl:mt-3"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default CommentsSection;
