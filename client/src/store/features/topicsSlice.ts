import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITopic } from "../../interfaces";

const initialState: { topics: ITopic[] } = { topics: [] };

export const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    setTopics: (state, action: PayloadAction<ITopic[]>) => {
      state.topics = [...action.payload];
    },
  },
});

export const { setTopics } = topicsSlice.actions;

const topicsSliceReducer = topicsSlice.reducer;
export default topicsSliceReducer;
