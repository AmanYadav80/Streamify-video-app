import { createSlice } from "@reduxjs/toolkit";

const ChannelSlice=createSlice({
    name:"channel",
    initialState:{
        channelId:null,
    },
    reducers:{
        addChannelId:(state,action)=>{
            state.channelId=action.payload;
        }
    },
})
export const { addChannelId }=ChannelSlice.actions;
export default ChannelSlice.reducer;