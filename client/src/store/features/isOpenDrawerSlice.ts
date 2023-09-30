import { createSlice } from "@reduxjs/toolkit";

export const isOpenDrawerSlice = createSlice({
  name: "isOpenDrawer",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      return { value: !state.value };
    },
  },
});

export const { toggle } = isOpenDrawerSlice.actions;

export default isOpenDrawerSlice.reducer;
