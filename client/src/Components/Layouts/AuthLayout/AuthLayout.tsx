import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppDispatch } from "../../../store/store";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import {
  getColorTheme,
  setColorTheme,
  updateBootStrapTheme,
} from "../../../utils";
import { setTheme } from "../../../store/features/isDarkModeSlice";

const AuthLayout = () => {
  const dispatch = useAppDispatch();
  const systemPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });
  useEffect(() => {
    if (!getColorTheme()) {
      const currentColorSceme = systemPrefersDark ? "dark" : "light";
      setColorTheme(currentColorSceme);
      dispatch(setTheme(currentColorSceme));
    } else {
      updateBootStrapTheme(getColorTheme() === "dark" ? "dark" : "light");
    }
  }, []);
  return <Outlet />;
};

export default AuthLayout;
