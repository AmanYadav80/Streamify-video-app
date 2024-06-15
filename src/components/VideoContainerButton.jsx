import React from "react";

const VideoContainerButton = () => {
  const list = [
    "All",
    "Music",
    "News",
    "Programming",
    "Trailers",
    "Live",
    "Gaming",
    "UPSC",
    "Comedy",
    "Coding",
    "Development",
    "Cricket",
    "Chess",
    "Motivation",
  ];

  return (
    <div className="h-[10%] p-4 flex items-center mb-6 overflow-x-auto scrollbar-hide">
      {list.map((btn) => (
        <button
          key={btn}
          className="py-2 px-4 m-2 text-white bg-black bg-opacity-80 hover:bg-opacity-70 rounded-lg"
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default VideoContainerButton;
