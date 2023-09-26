import { configureStore } from "@reduxjs/toolkit";
import isOpenDrawerReducer from "./features/isOpenDrawerSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    isOpenDrawer: isOpenDrawerReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
