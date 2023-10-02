import { configureStore } from "@reduxjs/toolkit";
import isOpenDrawerReducer from "./features/isOpenDrawerSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import themeReducer from "./features/themeModeSlice";
import topicsSliceReducer from "./features/topicsSlice";

export const store = configureStore({
  reducer: {
    isOpenDrawer: isOpenDrawerReducer,
    theme: themeReducer,
    topics: topicsSliceReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
