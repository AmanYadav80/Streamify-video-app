import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSideBarOpen: false,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});
export const { toggleSideBar } = SideBarSlice.actions;
export default SideBarSlice.reducer;
