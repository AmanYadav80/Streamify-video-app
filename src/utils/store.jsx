import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";
import ChatSlice from "./ChatSlice";
import ChannelSlice from "./ChannelSlice";
const appStore = configureStore({
  reducer: {
    sideBar: SideBarSlice,
    chat:ChatSlice,
    channel:ChannelSlice,
  },
});
export default appStore;