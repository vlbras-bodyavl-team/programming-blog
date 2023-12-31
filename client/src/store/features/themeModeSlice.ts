import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getColorTheme, setColorTheme } from "../../utils";

export const themeModeSlice = createSlice({
  name: "isDarkMode",
  initialState: {
    isDarkMode: getColorTheme() === "dark",
    theme: getColorTheme(),
  },
  reducers: {
    toggle: (state) => {
      const theme = state.theme === "dark" ? "light" : "dark";
      setColorTheme(theme);
      state.theme = theme;
      state.isDarkMode = !state.isDarkMode;
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.isDarkMode = action.payload === "dark";
      state.theme = action.payload;
    },
  },
});

export const { toggle, setTheme } = themeModeSlice.actions;

export default themeModeSlice.reducer;
