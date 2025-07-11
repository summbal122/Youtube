import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../Constants";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatMessages: [],
  },
  reducers : {
    addMessage : (state, action) => {
      state.chatMessages.splice(OFFSET_LIVE_CHAT, 1)
      state.chatMessages.unshift(action.payload);
    }
  }
})
export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;