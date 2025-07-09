import { createSlice } from "@reduxjs/toolkit";
import { LRUCache } from "./lruCache";

const lru = new LRUCache(50); // limit cache to 10 items

const searchSlice = createSlice({
  name: "search",
  initialState: lru.toObject(), // init as empty object
  reducers: {
    cacheResults: (state, action) => {
      const [key, value] = Object.entries(action.payload)[0];
      lru.put(key, value);
      return lru.toObject(); // overwrite state with latest cache state
    }
  }
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;