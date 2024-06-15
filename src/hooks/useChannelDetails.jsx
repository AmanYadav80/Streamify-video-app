import { useEffect, useState } from "react"
import { YOUTUBE_CHANNEL_API } from "../utils/constants";

const useChannelDetails=(id)=>{
    const [channelDetals,setChannelDetails]=useState([]);
    const getChannelDetails=async()=>{
        const data=await fetch(YOUTUBE_CHANNEL_API+id);
        const json=await data.json();
        setChannelDetails(json.items[0]);
        // console.log("Channel details",channelDetals);
    }
    useEffect(()=>{
      getChannelDetails();
    },[]);
    return channelDetals;
}
export default useChannelDetails;