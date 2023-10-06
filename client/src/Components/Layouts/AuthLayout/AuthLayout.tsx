import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { getColorTheme, setColorTheme } from "../../../utils";
import { setTheme } from "../../../store/features/themeModeSlice";

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
    }
  }, []);

  return <Outlet />;
};

export default AuthLayout;
