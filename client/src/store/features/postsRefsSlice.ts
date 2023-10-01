import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Ref } from "react";

const initialState: Ref<HTMLLIElement>[] = [];
export const postsRefsSlice = createSlice({
  name: "postsRefs",
  initialState,
  reducers: {
    setRefs: (_, action: PayloadAction<Ref<HTMLLIElement>[]>) => {
      return [...action.payload];
    },
  },
});

export const { setRefs } = postsRefsSlice.actions;

const postsRefReducer = postsRefsSlice.reducer;

export default postsRefReducer;
