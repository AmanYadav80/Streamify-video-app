import { useLocation, useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import Channel from "./Channel";
import useCurrentVideo from "../hooks/useCurrentVideo";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const channelId=searchParams.get("channelId");
  const videoId=searchParams.get("v");
  const currentVideoDetails=useCurrentVideo(videoId);
  return (
    <div className="w-[100%] h-screen p-2 m-2 flex flex-col gap-16 bg-[#111827]">
      <div className="flex gap-4">
        <div>
          <iframe
            className="ml-12 rounded-xl"
            width="930"
            height="550"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <LiveChat />
        </div>
      </div>
      <div className="flex flex-col gap-4 ml-12 -mt-12 bg-[#111827]">
      <h1 className="text-2xl text-white font-medium w-[55%]">{currentVideoDetails?.snippet?.localized?.title}</h1>
      <div>
        <Channel id={channelId} like={currentVideoDetails?.statistics?.likeCount}/>
      </div>
      <div>
        <Comments />
      </div>
      </div>
    </div>
  );
};
export default WatchPage;
