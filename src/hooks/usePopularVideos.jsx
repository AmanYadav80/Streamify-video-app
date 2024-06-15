import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const usePopularVideos = () => {
  const [popularVideos, setPopularVideos] = useState([]);
  console.log("This is the popular videos api",YOUTUBE_VIDEOS_API)
  useEffect(() => {
    const getPopularVideos = async () => {
      try {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setPopularVideos(json.items);
      } catch (error) {
        console.error("Error fetching popular videos:", error);
      }
    };

    getPopularVideos();
  }, []);

  return popularVideos;
};

export default usePopularVideos;
