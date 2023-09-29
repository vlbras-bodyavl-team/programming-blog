import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITopic } from "../../interfaces";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: [],
  reducers: {
    // setTopics: (state, action: PayloadAction<ITopic[]>) => {
    //   return [...action.payload];
    // },
  },
});
