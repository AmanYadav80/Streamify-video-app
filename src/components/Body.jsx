import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  const sideBar = useSelector((store) => store.sideBar.isSideBarOpen);
  return (
    <div className="flex justify-between">
      {sideBar && <SideBar />}
      <Outlet />
    </div>
  );
};
export default Body;
