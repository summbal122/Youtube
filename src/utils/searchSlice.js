import { createSlice } from "@reduxjs/toolkit";
import { LRUCache } from "./lruCache";

const lru = new LRUCache(50); // limit cache to 50 items

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cache: lru.toObject(),
    searchTerm: "", // added searchTerm
  },
  reducers: {
    cacheResults: (state, action) => {
      const [key, value] = Object.entries(action.payload)[0];
      lru.put(key, value);
      state.cache = lru.toObject(); //  update cache
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload; // update searchTerm
    },
  }
});

export const { cacheResults, setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
