import useChannelDetails from "../hooks/useChannelDetails";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
function formatSubscribersCount(viewCount) {
  if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(1) + "M";
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(1) + "k";
  } else {
    return viewCount.toString();
  }
}
const Channel = (props) => {
  const channelId = props.id;
  const likes = props.like;
  const channel = useChannelDetails(channelId);
  const sub = channel?.statistics?.subscriberCount;
  return (
    <div className="text-white h-24 w-[55%] shadow-sm shadow-gray-100 rounded-xl mt-2 p-4 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img
          src={channel?.snippet?.thumbnails?.default?.url}
          className="h-16 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">
            {channel?.snippet?.localized?.title}
          </h1>
          {sub && <p>{formatSubscribersCount(sub) + " subscribers"}</p>}
        </div>
      </div>
      <div className="flex flex-row items-center gap-16">
        <div className="flex flex-row gap-4 items-center bg-black bg-opacity-70 hover:bg-opacity-50 py-3 px-6 rounded-full">
          <div className="flex flex-row gap-1 justify-center items-center">
            <AiOutlineLike className="text-3xl font-bold cursor-pointer" />
            {likes && formatSubscribersCount(likes)}
          </div>
          <p>
            <BiDislike className="text-3xl font-bold cursor-pointer" />
          </p>
        </div>
        <button className="p-4 m-3 bg-black bg-opacity-70 text-white rounded-full font-bold hover:bg-opacity-50">
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default Channel;
