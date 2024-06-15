import { FaRegUser } from "react-icons/fa";
const LiveChatMessage=({name,message})=>{
    return (
        <div className="flex flex-col text-white gap-1/4 justify-center shadow-sm shadow-gray-100 m-3 p-2 rounded-lg cursor-pointer">
          <div className="flex flex-row gap-3 items-center">
           <FaRegUser className="text-xl font-medium"/>
           <h4 className="text-lg">{name}</h4>
          </div>
          <p className="ml-8">{message}</p>
        </div>
    )
}
export default LiveChatMessage;