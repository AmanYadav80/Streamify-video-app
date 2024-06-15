import MainVideoContainer from "./MainVideoContainer";
import VideoContainerButton from "./VideoContainerButton";

const VideoContainer = () => {
  return (
    <div className=" h-screen w-[100%] m-4 overflow-x-auto">
      <VideoContainerButton />
      <MainVideoContainer />
    </div>
  );
};
export default VideoContainer;
