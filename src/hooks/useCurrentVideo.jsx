import { useEffect, useState } from "react";
import { YOUTUBE_CURRENT_VIDEO_API } from "../utils/constants";
const useCurrentVideo = (id) => {
  const [currentVideo,setCurrentVideo]=useState([]);
  const getCurrentVideo=async()=>{
    const data=await fetch(YOUTUBE_CURRENT_VIDEO_API+id);
    const json=await data.json();
    setCurrentVideo(json.items[0]);
  }
  useEffect(()=>{
    getCurrentVideo();
  },[]);
  return currentVideo;
};

export default useCurrentVideo;
