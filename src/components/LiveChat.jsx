import LiveChatMessage from "./LiveChatMesssage";
import { useDispatch, useSelector } from "react-redux";
import { CiLocationArrow1 } from "react-icons/ci";
import { useEffect, useState } from "react";
import { addMessage } from "../utils/ChatSlice";
import { getRandomMessage, getRandomName } from "../utils/constants";
const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMsg, setLiveMsg] = useState("");
  const chatMsg = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomMessage(),
        })
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col">
      <div className="p-4 text-white border-2 border-gray-100 h-[490px] w-[500px] rounded-lg overflow-y-scroll ">
        {chatMsg &&
          chatMsg.map((user, index) => (
            <LiveChatMessage
              key={index}
              name={user.name}
              message={user.message}
            />
          ))}
      </div>
      <div>
        <form
          className="flex gap-1 justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Aman Yadav",
                message: liveMsg,
              })
            );
          }}
        >
          <input
            type="text"
            placeholder="Chat..."
            className="text-white font-bold bg-black opacity-40 border-2 border-gray-100 p-3 mt-1 w-[440px] rounded-lg"
            value={liveMsg}
            onChange={(e) => setLiveMsg(e.target.value)}
          />
          <button type="submit">
            <CiLocationArrow1 className="text-white font-bold text-4xl" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default LiveChat;
