import { configureStore } from "@reduxjs/toolkit";
import isOpenDrawerReducer from "./features/isOpenDrawerSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import themeReducer from "./features/isDarkModeSlice";

export const store = configureStore({
  reducer: {
    isOpenDrawer: isOpenDrawerReducer,
    theme: themeReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
