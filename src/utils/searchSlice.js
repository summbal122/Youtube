import { createSlice } from "@reduxjs/toolkit";

const searchSlice= createSlice({
  name:"search",
  initialState : {
  //empty object because 0(1)
  },
  reducers : {
    cacheResults: (state, action) => {
    state= Object.assign(state, action.payload) //mutate state
     //{...action.payload, ...state} not taking it, figure out
    }
  }
})
export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;