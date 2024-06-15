import { FaRegUser, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

const CommentsData = [
  {
    name: "User1",
    text: "This video is amazing!",
    replies: [
      {
        name: "User2",
        text: "I agree, learned a lot from it!",
        replies: [
          {
            name: "User3",
            text: "Yes, the explanations were clear.",
            replies: [
              {
                name: "User4",
                text: "The examples were helpful too.",
                replies: [],
              },
              {
                name: "User5",
                text: "I liked the visuals.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "User6",
        text: "The presenter did a great job!",
        replies: [
          {
            name: "User7",
            text: "I wish they would make more videos like this.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "User8",
    text: "Good content, keep it up!",
    replies: [
      {
        name: "User9",
        text: "Thanks, glad you liked it!",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies: initialReplies } = data;
  const [showReplies, setShowReplies] = useState(false);
  const toggleReplies = () => {
    setShowReplies((prev) => !prev);
  };

  return (
    <div className="w-[55%] border border-gray-200 rounded-lg p-4 mb-4 text-white bg-[#111827]">
      <div className="flex items-center mb-2">
        <div className="mr-2">
          <FaRegUser className="text-2xl" />
        </div>
        <h4 className="text-lg font-semibold">{name}</h4>
      </div>
      <p className="font-medium">{text}</p>
      {initialReplies.length > 0 && (
        <button
          onClick={toggleReplies}
          className="text-blue-500 mt-2 flex items-center space-x-1 focus:outline-none"
        >
          {showReplies ? <FaAngleUp /> : <FaAngleDown />}
          <span>{showReplies ? "Hide Replies" : "Show Replies"}</span>
        </button>
      )}
      {showReplies && (
        <div className="pl-4  mt-4">
          {initialReplies.map((reply, index) => (
            <div key={index} className="mb-2">
              <Comment data={reply} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Comments = () => {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {CommentsData.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </div>
  );
};

export default Comments;
