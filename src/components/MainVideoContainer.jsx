import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import usePopularVideos from "../hooks/usePopularVideos";
import { useEffect } from "react";
const MainVideoContainer = () => {
  const popularVideos = usePopularVideos();
  // console.log("Popular Videos", popularVideos);
  if(!popularVideos)
   return <Shimmer/>
  return (
    <div className="flex flex-wrap justify-center">
      {popularVideos &&
        popularVideos.map((video) => (
          <Link
            to={`watch?v=${video.id}&channelId=${video.snippet.channelId}`}
            key={video.id}
          >
            <VideoCard key={video.id} item={video} />
          </Link>
        ))}
    </div>
  );
};

export default MainVideoContainer;
